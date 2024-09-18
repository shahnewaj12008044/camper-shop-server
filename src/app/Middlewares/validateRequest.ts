import { catchAsync } from "../Utils/catchAsync";
import { AnyZodObject } from "zod";


export const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req, res, next) => {
    await schema.parseAsync({
      body: req.body,
    });
    next();
  });
};
