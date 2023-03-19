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
