import { Model, Schema, model, Document } from 'mongoose';
import { IProduct } from '@/types/interfaces';

interface IProductModel extends Model<IProduct> {}

const schema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category' }
  },
  { timestamps: true }
);

const Products = model<IProduct, IProductModel>('Products', schema);

export default Products;
