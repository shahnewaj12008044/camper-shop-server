import { startSession } from 'mongoose';
import { TOrder } from './order.interface';
import { Order } from './order.model';
import AppError from '../../Errors/AppError';
import httpStatus from 'http-status-codes';
import { Product } from '../Product/Product.model';


const createOrderIntoDB = async (payload: TOrder) => {
  const { products } = payload;
  const session = await startSession();
  try {
    session.startTransaction();
    const order = await Order.create([payload], { session });
    // console.log(order)
    if (!order) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create order');
    }
    for (const product of products) {
      const productData = await Product.findById(product.product)
        .session(session)
        .exec();
        // console.log("productData",productData)
      if (!productData) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Invalid Product id');
      }

      if (productData.quantity < product.quantity) {
        throw new AppError(
          httpStatus.BAD_REQUEST,
          'This product is not available in the requested quantity',
        );
      }

      productData.quantity -= product.quantity;
      await productData.save({ session });
    }

    await session.commitTransaction();
    session.endSession();
    return order

  } catch (e) {
    await session.abortTransaction();
     session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST,"Failed to create order!!!")
  }
};

export const OrderServices = {
  createOrderIntoDB,
};
