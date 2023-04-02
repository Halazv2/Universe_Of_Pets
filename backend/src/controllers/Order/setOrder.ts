import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import { IOrder } from '@/types/interfaces';
import { Order } from '../../models';

export const addOrderSchema = Joi.object().keys({
  user: Joi.string().required(),
  products: Joi.array().required(),
  total: Joi.number().required()
});

const setOrder: RequestHandler = async (req: Request<{}, {}, IOrder>, res) => {
  try {
    const { user, products, total } = req.body;
    const order = await Order.create({ user, products, total });
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error });
  }
};
export default setOrder;
