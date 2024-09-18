import QueryBuilder from "../../Builder/QueryBuilder";
import { ProductSearchableFields } from "./Product.constant";
import { TProduct } from "./Product.interface";
import { Product } from "./Product.model";

const createProductIntoDB = async (payload: TProduct) => {
    const result = await Product.create(payload);
    return result;
  };

const getAllProductsFromDB = async( query: Record<string, unknown>) =>{
  const productQuery = new QueryBuilder(Product.find(),query).search(ProductSearchableFields).sort().filter().paginate()

  const result = await productQuery.modelQuery;

  return result;
}

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const getFeaturedProductsFormDB = async () => {
  const result = await Product.find({ isFeatured: true });
  return result;
};


export const ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    getFeaturedProductsFormDB,
}