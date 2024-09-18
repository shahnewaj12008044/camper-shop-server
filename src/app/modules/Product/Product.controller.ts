import { Request, Response } from "express";
import { catchAsync } from "../../Utils/catchAsync";
import { ProductServices } from "./Product.service";
import httpStatus from "http-status-codes";
import sendResponse from "../../Utils/sendResponse";

const createProduct = catchAsync(async(req : Request, res: Response)=>{
    const result = await ProductServices.createProductIntoDB(req.body);

    sendResponse(res,{
        status: httpStatus.CREATED,
        success: true,
        message: "Product is Created Successfully!",
        data: result,
    })
})
const getAllProducts = catchAsync(async(req : Request, res: Response)=>{
    
    const result = await ProductServices.getAllProductsFromDB(req.query);

    sendResponse(res,{
        status: httpStatus.OK,
        success: true,
        message: "Product Data  is retrived Successfully!",
        data: result,
    })
})
const getSingleProduct = catchAsync(async(req : Request, res: Response)=>{
    const {id} = req.params;
    const result = await ProductServices.getSingleProductFromDB(id);

    sendResponse(res,{
        status: httpStatus.OK,
        success: true,
        message: "Product Data  is retrived Successfully!",
        data: result,
    })
})

const getFeaturedProducts = catchAsync(async (req, res) => {
    const result = await ProductServices.getFeaturedProductsFormDB();
   
    sendResponse(res,{
        status: httpStatus.OK,
        success: true,
        message: "Featured Product Data  is retrived Successfully!",
        data: result,
    })
  });


export const ProductController = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    getFeaturedProducts,
}