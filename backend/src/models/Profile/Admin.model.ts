import {Model, Schema, model, Document} from "mongoose";

export interface IAdmin extends Document {
  full_name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IAdminModel extends Model<IAdmin> {}

const schema = new Schema<IAdmin>(
  {
    full_name: {type: String, required: true},
    email: {type: String, required: true, unique: true, lowercase: true},
    password: {type: String, required: true},
  },
  {timestamps: true}
);

const Admin = model<IAdmin, IAdminModel>("Admin", schema);

export default Admin;
