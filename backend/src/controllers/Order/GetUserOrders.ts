import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import { IOrder } from '@/types/interfaces';
import requestMiddleware from '../../middlewares/request-middleware';
import { Order } from '../../models';

const GetUserOrders: RequestHandler = async (req: Request, res) => {
  const { user } = req.params as { user: string };

  try {
    const orderData = await Order.find({ user });
    if (!orderData) {
      return res.status(404).send('Order not found');
    }
    res.json(orderData);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

export default requestMiddleware(GetUserOrders);
