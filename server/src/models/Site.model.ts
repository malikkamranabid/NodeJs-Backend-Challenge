import mongoose from "mongoose";


export const siteSchema = new mongoose.Schema({
  siteName: {
    type: String,
    trim: true,
    unique: true,
    required: 'Site Name is required',
  },
  Timezone: {
    type: String,
    trim: true,
    required: 'Time Zone is required',
  },
  Startinghour: {
    type: String,
    required: 'Starting hour is required',
    trim: true
  },
  Endinghour: {
    type: String,
    required: 'Ending hour is required',
    trim: true
  },
  Latethreshold : {
    type: String,
    required: 'Late threshold is required'
  },
  TotalInactivehours: {
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