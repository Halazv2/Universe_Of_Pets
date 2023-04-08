import { Request, Response } from 'express';
import { Cart } from '../../models';
import { ICart } from '../../types/interfaces';
import requestMiddleware from '../../middlewares/request-middleware';
import joi from 'joi';

export const addTocartSchema = joi.object().keys({
  user: joi.string().required(),
  products: joi.array().required(),
  option: joi.string().required(),
  quantity: joi.number().required()
});

const addTocart = async (req: Request, res: Response): Promise<void> => {
  try {
    const { user, products, option, quantity }: ICart = req.body;
    const cart = await Cart.create({ user, products, option, quantity });
    res.status(201).json({ cart });
  } catch (error) {
    throw error;
  }
};

export default requestMiddleware(addTocart, { validation: { body: addTocartSchema } });
