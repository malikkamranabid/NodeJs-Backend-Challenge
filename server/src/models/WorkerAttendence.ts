import mongoose from "mongoose";


export const WorkerAttendenceSchema = new mongoose.Schema({
  dateRecorded: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['late', 'onTime']
    }],
    default: ['onTime']
  },
});

const WorkerAttendence = mongoose.model("WorkerAttendence", WorkerAttendenceSchema)

export default WorkerAttendence;