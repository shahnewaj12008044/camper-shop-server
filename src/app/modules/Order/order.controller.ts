import { catchAsync } from '../../Utils/catchAsync';
import sendResponse from '../../Utils/sendResponse';
import { OrderServices } from './order.service';
import httpStatus from 'http-status-codes';

const createOrder = catchAsync(async (req, res) => {
  const result = await OrderServices.createOrderIntoDB(req.body);
  sendResponse(res, {
    status: httpStatus.OK,

    success: true,
    message: 'Order Created Successfully',
    data: result,
  });
});

export const OrderControllers = {
  createOrder,
};
