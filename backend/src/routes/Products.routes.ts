import { Router } from 'express';
import * as authController from '../controllers/Auth';
import * as ProductController from '../controllers/Products';
import verifySignUp from '../middlewares/verifySignUp';
import authJwt from '../middlewares/authJWT';
import multer from 'multer';
import Products from '../models/Product.model';
import { IProduct, ICart, ICategory, IOrder } from '@/types/interfaces';
import path from 'path';

const ProductsRouter = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

ProductsRouter.get('/', ProductController.getProducts);
ProductsRouter.post('/', [upload.array('images', 5)], (req: any, res: any) => {
  const { name, description, price, category, quantity, options } = req.body;
  const images = req.files?.map((file: any) => {
    return {
      path: file.filename,
      contentType: file.mimetype
    };
  });
  const newProduct = new Products({
    name,
    description,
    price,
    images,
    category,
    options,
    quantity
  });
  newProduct
    .save()
    .then((product: any) => {
      res.status(200).json(product);
    })
    .catch((err: any) => {
      res.status(500).json(err);
    });
});

// dlete product
ProductsRouter.delete('/:id', ProductController.deleteProduct);
ProductsRouter.get('/byId/:id', ProductController.getProductById);
ProductsRouter.put('/:id',[upload.array('images', 5)], (req: any, res: any) => {
  const { name, description, price, category, quantity, options } = req.body;
  const images = req.files?.map((file: any) => {
    return {
      path: file.filename,
      contentType: file.mimetype
      };
      });
      Products.findByIdAndUpdate(req.params.id, {
        name,
        description,
        price,
        images,
        category,
        options,
        quantity
      })
      .then((product: any) => {
        res.status(200).json(product);
      })
      .catch((err: any) => {
        res.status(500).json(err);
      });
    });

export default ProductsRouter;
