import { Router } from 'express'
import User from '../models/User.model';
import WorkerAttendence from '../models/WorkerAttendence.model';

const siteRouter = Router();

siteRouter.get('/generateReport/:siteUnqiueName', async (req, res, next) => {;
  
  const siteUsersId = (await User.find({
    siteName: req.params.siteUnqiueName,
    isadmin: false
  })).map((user: any) => user._id);

  console.log(`this is siteWorkersUserNames ${siteUsersId}`);
  const siteWorkersAttendance = await WorkerAttendence.find({ "user": { "$in": [siteUsersId] } });

  res.json({ siteWorkersAttendance });

})

export default siteRouter;