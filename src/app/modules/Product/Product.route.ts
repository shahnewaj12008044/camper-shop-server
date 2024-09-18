import express from 'express';
import { validateRequest } from '../../Middlewares/validateRequest';
import { productValidations } from './Product.validation';
import { ProductController } from './Product.controller';

const router = express.Router();

router.post(
  '/create-product',
  validateRequest(productValidations.createProductValidation),
  ProductController.createProduct,
);
router.get('/', ProductController.getAllProducts);
router.get("/featuredProducts",ProductController.getFeaturedProducts );
router.get('/:id', ProductController.getSingleProduct);

export const ProductRoute = router;
