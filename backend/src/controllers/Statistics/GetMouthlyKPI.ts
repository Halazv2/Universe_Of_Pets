import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import { IStatistics } from '@/types/interfaces';
import { Statistics } from '../../models';
import requestMiddleware from '../../middlewares/request-middleware';

const getStatistics: RequestHandler = async (req: Request, res) => {
  const statistics: IStatistics[] = await Statistics.find();
  res.status(200).json(statistics);
};

export default requestMiddleware(getStatistics);
