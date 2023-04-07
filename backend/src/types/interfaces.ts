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
  quantity: number;
  options: string[];
  category: ICategory[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IStatistics extends Document {
  _id: string;
  totalExpenses: String;
  totalRevenue: String;
  totalProfit: String;
  dailyData: IDailyStatistics[];
  monthlyData: IMonthlyStatistics[];
  expensesByCategory: IExpensesByCategory[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IDailyStatistics extends Document {
  _id: string;
  date: Date;
  expenses: String;
  revenue: String;
}

export interface IMonthlyStatistics extends Document {
  _id: string;
  date: Date;
  revenue: String;
  expenses: String;
  operationalExpenses: String;
  nonOperationalExpenses: String;
}

export interface IExpensesByCategory extends Document {
  _id: string;
  salaries: String;
  supplies: String;
  services: String;
}
