import { Model, Schema, model, Document } from 'mongoose';
import { IAccount } from '@/types/interfaces';

interface IAccountModel extends Model<IAccount> {}

const schema = new Schema<IAccount>(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    lastActivity: { type: Date, default: Date.now },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

const Clients = model<IAccount, IAccountModel>('Clients', schema);

export { Clients };
