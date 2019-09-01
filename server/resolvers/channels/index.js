import prepared_channels from './prepared_channels';

export default {
    Query: {
        channels: async (parent,{ selected }, { models }) => {
            if (selected === undefined) {
                return await models.Channel.find();
            } else if (selected === true) {
                return await models.Channel.find({selected: true});
            } else if (selected === false) {
                return await models.Channel.find({selected: false});
            } else {
                return new Error("unknown argument");
            }
        }
    },
    Mutation: {
        initChannels: async (
            parent,
            { length },
            { models, secret },
        ) => {
            const new_channels = prepared_channels.splice(0, length).map(item => ({
                title: item.title,
                logo_token: item.qualities[0].logo_token,
                selected: false
            }));
            return models.Channel.create(new_channels);
        },
        updateChannel: async (
            parent,
            { _id, selected },
            { models, secret },
        ) => {
            const res = await models.Channel.findByIdAndUpdate(_id, {selected: !selected});
            return Object.assign({}, res._doc, {selected: !selected});
        },
    }
};

