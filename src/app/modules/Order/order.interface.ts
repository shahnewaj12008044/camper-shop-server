import { Types } from "mongoose";

export type TOrderedProducts = {
  product: Types.ObjectId;
  quantity: number;
};

export type TOrder = {
  name: string;
  email: string;
  number: string;
  address: string;
  totalPrice: number;
  products: [ TOrderedProducts ];
  cashOnDelivery: boolean;

};