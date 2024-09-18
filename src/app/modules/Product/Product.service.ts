import { TProduct } from "./Product.interface";
import { Product } from "./Product.model";

const createProductIntoDB = async (payload: TProduct) => {
    const result = await Product.create(payload);
    return result;
  };


export const ProductServices = {
    createProductIntoDB,
}