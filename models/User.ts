import { Schema } from 'mongoose';
import mongoose from '../database';

const userSchema = new Schema({
  firstName: Schema.Types.String,
  lastName: Schema.Types.String,
  password: Schema.Types.String,
  resetToken: Schema.Types.String,
  resetTokenExpiration: Schema.Types.Date,
  imgUrl: Schema.Types.String,
  isAdmin: Schema.Types.Boolean,
});

const User = mongoose.model('users', userSchema);

export default User;
