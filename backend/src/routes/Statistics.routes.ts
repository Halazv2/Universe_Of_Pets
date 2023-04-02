import { Router } from 'express';
import getStatistics from '../controllers/Statistics/GetMouthlyKPI';
import authJwt from '../middlewares/authJWT';

const statisticsRouter = Router();

statisticsRouter.get('/KPI', getStatistics);

export default statisticsRouter;
