import { Request, RequestHandler } from 'express';
import Joi from 'joi';
import bcrypt from 'bcrypt';
import requestMiddleware from '../../../middlewares/request-middleware';
import { Clients } from '../../../models';
import { IAccount } from '@/types/interfaces';
import jwt from 'jsonwebtoken';

export const addAccountSchema = Joi.object().keys({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().required()
});

const Login: RequestHandler = async (req: Request<{}, {}, IAccount>, res) => {
  const { email, password } = req.body;
  try {
    const client = (await Clients.findOne({ email })) as any;
    if (!client) return res.send({ message: 'User not found' });

    const passwordIsValid = await bcrypt.compare(password, client.password);
    if (!passwordIsValid) return res.send({ message: 'Invalid password' });

    let token = jwt.sign({ id: client._id }, process.env.SECRET as string, {
      expiresIn: 86400 // 24 hours
    });

    let response = {
      _id: client._id,
      first_name: client.first_name,
      last_name: client.last_name,
      email: client.email,
      token: token
    };
    res.status(200).send(response);
  } catch (e) {
    res.send({ message: 'Error in the server' });
  }
};

export default requestMiddleware(Login, { validation: { body: addAccountSchema } });
