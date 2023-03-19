import {Request, RequestHandler} from "express";
import Joi from "joi";
import bcrypt from "bcrypt";
import {IAccount} from "@/types/interfaces";
import {Clients} from "../../../models";
import requestMiddleware from "../../../middlewares/request-middleware";

export const addAccountSchema = Joi.object().keys({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().required(),
});

const signup: RequestHandler = async (req: Request<{}, {}, IAccount>, res) => {
  const {first_name, last_name, password, email} = req.body;
  const client = new Clients({
    first_name,
    last_name,
    password,
    email,
  });
  const salt = await bcrypt.genSalt(10);
  client.password = await bcrypt.hash(password, salt);
  await client.save();
  res.send({
    message: "Account added",
    client: {
      _id: client._id,
      first_name: client.first_name,
      last_name: client.last_name,
      email: client.email,
    },
  });
};

export default requestMiddleware(signup, {validation: {body: addAccountSchema}});
