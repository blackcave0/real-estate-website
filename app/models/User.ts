import mongoose, { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Please provide an email address.'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password.'],
  },
  name: {
    type: String,
    required: [true, 'Please provide a name.']
  },
  images: {
    type: [String],
    default: []
  }
});

const User = models.User || model('User', UserSchema);

export default User;
