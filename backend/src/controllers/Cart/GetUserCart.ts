import { Request, RequestHandler } from 'express';
import { Cart, Product } from '../../models';
import { ICart } from '../../types/interfaces';
import requestMiddleware from '../../middlewares/request-middleware';

const getUserCart: RequestHandler = async (req: Request, res) => {
  const { user } = req.params as { user: string };

  try {
    const cart = await Cart.find({ user }).populate({ path: 'products', model: Product });
    if (!cart) {
      res.status(404).json({ message: 'Cart is empty' });
    }
    res.status(200).json(cart);
  } catch (error) {
    throw error;
  }
};

export default requestMiddleware(getUserCart);
