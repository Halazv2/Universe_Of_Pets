import { Request, RequestHandler } from 'express';
import { Cart, Product } from '../../models';
import { ICart } from '../../types/interfaces';
import requestMiddleware from '../../middlewares/request-middleware';

const DeleteFromCart: RequestHandler = async (req: Request, res) => {
  const { id } = req.params as { id: string };

  try {
    const cart = await Cart.findByIdAndDelete(id);
    if (!cart) {
      res.status(404).json({ message: 'Cart is empty' });
    }
    res.status(200).json(cart);
  } catch (error) {
    throw error;
  }
};

export default requestMiddleware(DeleteFromCart);
