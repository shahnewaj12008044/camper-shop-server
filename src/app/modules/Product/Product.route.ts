import express from "express";
import { validateRequest } from "../../Middlewares/validateRequest";
import { productValidations } from "./Product.validation";
import { ProductController } from "./Product.controller";


const router = express.Router();

router.post(
  "/create-product",
  validateRequest(productValidations.createProductValidation),
  ProductController.createProduct
);


export const ProductRoute = router;
