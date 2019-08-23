import mongoose from 'mongoose';

const ChannelSchema = new mongoose.Schema({
  id: String,
  title: String,
  logo_token: String
});

const User = mongoose.model('User', ChannelSchema);

export default User;
