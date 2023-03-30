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
  products: IProduct[];
  total: number;
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
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProduct extends Document {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ICategory;
  createdAt: Date;
  updatedAt: Date;
}
