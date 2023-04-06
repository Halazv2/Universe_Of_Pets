import { Request, RequestHandler } from 'express';
import { IAccount, IOrder } from '@/types/interfaces';
import { Order, Clients } from '../../models';
import requestMiddleware from '../../middlewares/request-middleware';

interface IAccountWithOrders extends IAccount {
  user: IAccount;
  orders: IOrder[];
}

const getAllUser: RequestHandler = async (req: Request, res) => {
  const users = await Clients.find();
  const orders = await Order.find();

  let usersWithOrders = [] as any;

  users.forEach((user) => {
    const userOrders = orders.filter((order) => order.user.toString() === user._id.toString());
    if (userOrders.length > 0) {
      usersWithOrders.push({
        user: user,
        orders: userOrders
      });
    } else {
      usersWithOrders.push({
        user: user,
        orders: []
      });
    }
  });

  res.send(usersWithOrders);
};

export default requestMiddleware(getAllUser);
