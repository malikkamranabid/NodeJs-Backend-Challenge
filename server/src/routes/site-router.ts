import { Router } from 'express'
import Site from '../models/Site.model';

const siteRouter = Router();



siteRouter.get('/generateReport/:siteId', async (req, res, next) => {
  Site.find()
    .then((sites) => {
      return res.json(sites);
    })
    .catch((err) => {
      next(err);
    })
})

export default siteRouter;