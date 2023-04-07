import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import { IOrder } from '@/types/interfaces';
import requestMiddleware from '../../middlewares/request-middleware';
import { Order, Product } from '../../models';
import { Clients } from '../../models/Profile/Client.model';

const getOrders: RequestHandler = async (req: Request, res) => {
  try {
    const orders: IOrder[] = await Order.find({}).populate({ path: 'user', model: Clients }).populate({ path: 'products', model: Product });

    res.send(orders);
  } catch (e) {
    res.send({
      message: 'Error al obtener las ordenes'
    });
  }
};

export default requestMiddleware(getOrders);
