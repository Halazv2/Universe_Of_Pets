import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import { IOrder } from '@/types/interfaces';
import { Order, Product } from '../../models';

export const addOrderSchema = Joi.object().keys({
  user: Joi.string().required(),
  products: Joi.array().required(),
  total: Joi.number().required()
});

const setOrder: RequestHandler = async (req: Request<{}, {}, IOrder>, res) => {
  try {
    const { user, products, quantity, option } = req.body;
    // check product quantity in stock
    const productsInStock = await Product.find({ _id: { $in: products } });

    const productsOutOfStock = productsInStock.filter((product) => product.quantity === 0);

    if (productsOutOfStock.length > 0) {
      return res.status(400).json({ error: 'Some products are out of stock' });
    }

    // calculate total price
    /* `const total = productsInStock.reduce((acc, product) => acc + product.price, 0);` is calculating the
total price of all the products in the order. It uses the `reduce()` method to iterate over the
`productsInStock` array and accumulate the price of each product into the `acc` variable, starting
from an initial value of `0`. The final result is the total price of all the products in the order,
which is stored in the `total` variable. */
    const total = productsInStock.reduce((acc, product) => acc + product.price, 0);

    // if option is not selected, take the first option from the product

    const optionSelected = option || productsInStock[0].options[0];

    // create order
    const order = new Order({
      user,
      products,
      quantity,
      option: optionSelected,
      total
    });

    // update product quantity
    await Promise.all(
      productsInStock.map(async (product) => {
        product.quantity = product.quantity - quantity;
        await product.save();
      })
    );

    await order.save();

    res.send({ order });
  } catch (error) {
    res.status(400).json({ error });
  }
};
export default setOrder;
