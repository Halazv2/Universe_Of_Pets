import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import { IOrder } from '@/types/interfaces';
import { Order, Product, Cart } from '../../models';

export const addOrderSchema = Joi.object().keys({
  user: Joi.string().required(),
  products: Joi.array().required(),
  quantity: Joi.number().required(),
  option: Joi.string(),
  total: Joi.number().required()
});

const setOrder: RequestHandler = async (req: Request<{}, {}, IOrder>, res) => {
  try {
    const { user, products, quantity, option, total, addressLineOne, addressLineTwo, phone, city, country } = req.body;
    console.log(req.body);
    const productsInStock = await Product.find({ _id: { $in: products } });

    const productsOutOfStock = productsInStock.filter((product) => product.quantity === 0);

    if (productsOutOfStock.length > 0) {
      return res.status(400).json({ error: 'Some products are out of stock' });
    }

    // const total = productsInStock.reduce((acc, product) => acc + product.price, 0);

    const optionSelected = option || productsInStock[0].options[0];

    const order = new Order({
      user,
      products,
      quantity,
      option: optionSelected,
      total,
      addressLineOne,
      addressLineTwo,
      phone,
      city,
      country
    });

    if (productsInStock.length > 0) {
      // update product quantity
      await Promise.all(
        productsInStock.map(async (product) => {
          product.quantity = product.quantity - quantity;
          await product.save();
        })
      );
      await order.save();
    }

    res.send({ order });
  } catch (error) {
    res.status(400).json({ error });
  }
};
export default setOrder;
