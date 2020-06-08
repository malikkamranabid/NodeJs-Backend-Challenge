import mongoose from "mongoose";
import { siteSchema } from "./Site.model";


export const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    default: ''
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
  isadmin: {
    type: Boolean,
    default: false
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