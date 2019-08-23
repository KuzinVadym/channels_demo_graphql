import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  id: String,
  username: String,
  email: String,
  role: String
});

const User = mongoose.model('User', UserSchema);

export default User;