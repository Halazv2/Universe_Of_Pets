import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import { IProduct, ICategory } from '@/types/interfaces';
import { Product, Category } from '../../models';

const getProductById: RequestHandler = async (req: Request, res) => {
  try {
    const { id } = req.params as { id: string }
    const product: IProduct[] = await Product.find({ _id: id }).populate({
      path: 'category',
      model: Category
    });

    return res.status(200).json(
      product.map((product) => {
        return {
          id: product._id,
          name: product.name,
          description: product.description,
          category: product.category,
          image: product.images.map((image) => image.path),
          price: product.price,
          quantity: product.quantity,
          options: product.options
        };
      }
      )
    );
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export default getProductById;
