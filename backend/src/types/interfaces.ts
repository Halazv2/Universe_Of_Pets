import { Document } from 'mongoose';

export interface IAccount extends Document {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  lastActivity: Date;
  createdAt: Date;
  updatedAt: Date;
}
export interface IOrder extends Document {
  _id: string;
  user: IAccount;
  products: IProduct[];
  total: number;
  status: 'pending' | 'cancelled' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}
export interface ICart extends Document {
  _id: string;
  products: IProduct[];
  total: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface ICategory extends Document {
  _id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface IImage extends Document {
  _id: string;
  path: string;
  product: string; // Change to string type to store the product ID
  createdAt: Date;
  updatedAt: Date;
}
export interface IProduct extends Document {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: IImage[];
  category: ICategory;
  createdAt: Date;
  updatedAt: Date;
}
