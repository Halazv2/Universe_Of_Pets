import { Model, Schema, model, Document } from 'mongoose';
import { IOrder } from '@/types/interfaces';

interface IOrderModel extends Model<IOrder> {}

const schema = new Schema<IOrder>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'Clients',
      required: true
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Products',
        required: true
      }
    ],
    total: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ['pending', 'cancelled', 'completed'],
      default: 'pending'
    },
    option: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const Order = model<IOrder, IOrderModel>('Order', schema);

export default Order;
