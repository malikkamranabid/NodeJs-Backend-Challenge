import mongoose from "mongoose";
import { userSchema } from "./User.model";


export const WorkerTimeSheetSchema = new mongoose.Schema({
  duration: {
    type: Number,
    default: 0
  },
  isActive: {
    type: [{
      type: Boolean,
      enum: [true, false]
    }],
    default: [true]
  },
  workerId: userSchema,
});

const WorkerTimeSheet = mongoose.model("WorkerTimeSheet", WorkerTimeSheetSchema)

export default WorkerTimeSheet;