import mongoose from 'mongoose';

const ChannelSchema = new mongoose.Schema({
  title: String,
  logo_token: String,
  selected: Boolean
});

const Channel = mongoose.model('Channel', ChannelSchema);

export default Channel;
