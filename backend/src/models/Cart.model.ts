import { Model, Schema, model, Document } from 'mongoose';
import { ICart } from '@/types/interfaces';

interface ICartModel extends Model<ICart> {}

const schema = new Schema<ICart>(
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

const Cart = model<ICart, ICartModel>('Cart', schema);

export default Cart;
