import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    token: { type: String },
  },
  { strict: 'throw' }
);

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
