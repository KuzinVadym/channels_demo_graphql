import gql from "graphql-tag";

export const INIT_CHANNELS = gql`
  mutation InitChannel($length: Int!) {
    initChannels(length: $length) {
      _id
      title
      logo_token
      selected
    }
  }  
`;

export const GET_CHANNELS = gql`
  query($selected: Boolean){
    channels(selected: $selected){
      _id
      title
      logo_token
      selected
    }
  }
`;

export const UPDATE_CHANNELS = gql`
  mutation($_id: String!, $selected: Boolean) {
    updateChannel(_id: $_id, selected: $selected) {
      _id
      title
      logo_token
      selected
    }
  }
`;

export const initUpdate = function(cache, { data: { initChannels } }){
    const newchannels = [...initChannels];
    cache.writeQuery({
        query: GET_CHANNELS,
        data: { channels: newchannels },
    });
};

export const channelUpdate = function(cache, { data: { updateChannel } }){
    let { channels } = cache.readQuery({ query: GET_CHANNELS, variables: { selected: true } });
    const newchannels = [...channels];
    if (channels.map(item => item._id).indexOf(updateChannel._id) >= 0) {
        newchannels.splice(channels.map(item => item._id).indexOf(updateChannel._id), 1);
    } else {
        newchannels.push(updateChannel);
    }
    cache.writeQuery({
        query: GET_CHANNELS,
        variables: { selected: true },
        data: { channels: newchannels },
    });
};
