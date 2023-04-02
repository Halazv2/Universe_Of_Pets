// cancel order controller

import { Request, RequestHandler } from 'express';
import { IOrder } from '@/types/interfaces';
import { Order } from '../../models';
import requestMiddleware from '../../middlewares/request-middleware';
import logger from '../../logger';

const cancelOrder: RequestHandler = async (req: Request<{}, {}, IOrder>, res) => {
  const { id } = req.params as { id: string };

  const order = Order.findOne({ _id: id });

  if (!order) {
    logger.error('Order not found');
    return res.status(400).json({ error: 'Order not found' });
  }

  if (order) {
    const orderDate = new Date(order.createdAt);
    const currentDate = new Date();
    const difference = currentDate.getTime() - orderDate.getTime();
    const differenceInHours = difference / (1000 * 3600);

    if (differenceInHours > 24) {
      res.status(400).json({ error: 'Order cannot be cancelled' });
    } else {
      // cancel order
      const cancelledOrder = await Order.findByIdAndUpdate(id, { status: 'cancelled' }, { new: true });
      res.status(200).json(cancelledOrder);
    }
  }
};

export default requestMiddleware(cancelOrder);
