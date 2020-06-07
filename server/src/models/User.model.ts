import mongoose from "mongoose";
import { siteSchema } from "./Site.model";


export const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    default: ''
  },
  lastName: {
    type: String,
    trim: true,
    default: ''
  },
  displayName: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    default: '',
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  username: {
    type: String,
    unique: 'User name is not unique',
    required: 'Please fill in a username',
    trim: true
  },
  password: {
    type: String,
    default: '',
  },
  salt: {
    type: String
  },
  roles: {
    type: [{
      type: String,
      enum: ['worker', 'admin']
    }],
    default: ['worker']
  },
  updated: {
    type: Date
  },
  created: {
    type: Date,
    default: Date.now
  },
  sites: siteSchema,
});

const User = mongoose.model("User", userSchema)

export default User;