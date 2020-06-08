import mongoose from "mongoose";
import { userSchema } from "./User.model";


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
  workerUserName: userSchema,
});

const WorkerAttendence = mongoose.model("WorkerAttendence", WorkerAttendenceSchema)

export default WorkerAttendence;