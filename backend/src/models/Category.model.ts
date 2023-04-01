import { Model, Schema, model, Document } from 'mongoose';
import { ICategory } from '@/types/interfaces';

interface ICategoryModel extends Model<ICategory> {}

const schema = new Schema<ICategory>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
);

const Category = model<ICategory, ICategoryModel>('Category', schema);

export default Category;
