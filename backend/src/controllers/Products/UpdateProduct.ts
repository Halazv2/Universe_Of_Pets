import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import { IProduct, ICategory } from '@/types/interfaces';
import { Product, Category } from '../../models';

const updateProduct: RequestHandler = async (req: Request, res) => {
  try {
    const { id } = req.params as { id: string };
    const { name, description, category, image, price, quantity, options } = req.body as {
      name: string;
      description: string;
      category: ICategory;
      image: string[];
      price: number;
      quantity: number;
      options: string[];
    };
    const product = await Product.findByIdAndUpdate(
      id,
      {
        name,
        description,
        category,
        images: image,
        price,
        quantity,
        options
      },
      { new: true }
    );
    return res.status(200).json(product);
  }
    catch (error) { 
    return res.status(500).json({ error: error });
    }
};

export default updateProduct;
