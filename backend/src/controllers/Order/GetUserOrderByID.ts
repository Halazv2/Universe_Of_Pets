import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import { IOrder } from '@/types/interfaces';
import requestMiddleware from '../../middlewares/request-middleware';
import { Order } from '../../models';

const GetUserOrderByID: RequestHandler = async (req: Request, res) => {
  const { id, userId } = req.params as { id: string; userId: string };
  try {
    const orderData = await Order.findOne({
      _id: id,
      user: userId
    });
    if (!orderData) {
      return res.status(404).send('Order not found');
    }
    res.json(orderData);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

export default requestMiddleware(GetUserOrderByID);
