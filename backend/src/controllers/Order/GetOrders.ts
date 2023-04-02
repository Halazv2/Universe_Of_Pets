import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import { IOrder } from '@/types/interfaces';
import requestMiddleware from '../../middlewares/request-middleware';
import { Order } from '../../models';

const getOrders: RequestHandler = async (req: Request, res) => {
  const orders: IOrder[] = await Order.find();
  res.status(200).json(orders);
};

export default requestMiddleware(getOrders);
