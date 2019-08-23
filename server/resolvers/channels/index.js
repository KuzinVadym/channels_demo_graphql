import uuidv1 from 'uuid/v1';
let channels_data = require('./channels.json');

function eval_level(value) {
    let temp;
    switch (value) {
        case 'uhd':
            temp = 3;
            break;
        case 'hd':
            temp = 2;
            break;
        case 'sd':
            temp = 1;
            break;
        default:
            temp = 0;
    }
    return temp;
}

function comparator(a,b) {
    return eval_level(b.level) - eval_level(a.level);
}

export default {
    Query: {
        channels: async (parent, args, { models }) => {
            const prepared_chanels = channels_data.channels.map(item => {
                if (item.qualities.length == 1 && item.qualities[0].availability === 'available') {
                    return item;
                } else {
                    let available_qualities = item.qualities.filter(item => item.availability === 'available').sort(comparator).slice(0,1);
                    if (available_qualities.length > 0) {
                        item.qualities = available_qualities;
                        return item;
                    }
                }
            }).filter(item => item != undefined );
            console.log(prepared_chanels);
            return prepared_chanels;
        },
    },
    // Mutation: {
    //     create: async (
    //         parent,
    //         { username, email, password },
    //         { models, secret },
    //     ) => {
    //         const user = await models.User.create({
    //             id: uuidv1(),
    //             username,
    //             email,
    //             password,
    //         });
    //
    //         return user;
    //     },
    //
    //     update: async (
    //         parent,
    //         args,
    //         { models, secret },
    //     ) => {
    //         const result = await models.User.findOneAndUpdate({id: args.id}, args, { new: true});
    //         return result;
    //     },
    //
    //     delete: async (
    //         parent,
    //         args,
    //         { models, secret },
    //     ) => {
    //         const result = await models.User.findOneAndDelete({id: args.id});
    //         return result;
    //     },
    // }
};

