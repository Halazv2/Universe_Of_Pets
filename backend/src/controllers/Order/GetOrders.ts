import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import { IOrder } from '@/types/interfaces';
import requestMiddleware from '../../middlewares/request-middleware';
import { Order } from '../../models';
import { Clients } from '../../models/Profile/Client.model';

const getOrders: RequestHandler = async (req: Request, res) => {
  const orders = await Order.find().populate('user');
  return res.send(orders);
};

export default requestMiddleware(getOrders);
