import mongoose from "mongoose";


export const siteSchema = new mongoose.Schema({
  siteName: {
    type: String,
    trim: true,
    unique: true,
    required: 'Site Name is required',
  },
  timeZone: {
    type: String,
    trim: true,
    required: 'Time Zone is required',
  },
  startingHour: {
    type: String,
    required: 'Starting hour is required',
    trim: true
  },
  endingHour: {
    type: Number,
    required: 'Ending hour is required',
    trim: true
  },
  latethresHold : {
    type: Number,
    required: 'Late threshold is required'
  },
  totalInactivehours: {
    type: Number,
    required: 'Total In activehours is required'
  },
  updated: {
    type: Date
  },
  created: {
    type: Date,
    default: Date.now
  },
});

const Site = mongoose.model("Site", siteSchema)

export default Site;