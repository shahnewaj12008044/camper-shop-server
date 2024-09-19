import AppError from "../Errors/AppError";
import httpStatus from 'http-status-codes';
import { Product } from "../modules/Product/Product.model";


export async function updateProductQuantities(products: Array<{ product: string, quantity: number }>) {
    for (const product of products) {
        const productData = await Product.findById(product.product).exec();
        
        if (!productData) {
            throw new AppError(httpStatus.BAD_REQUEST, "Invalid Product id");
        }
        
        if (productData.quantity < product.quantity) {
            throw new AppError(httpStatus.BAD_REQUEST, "This product is not available in the requested quantity");
        }

        // Update the product quantity here if needed
        productData.quantity -= product.quantity;
        await productData.save();
    }
}

