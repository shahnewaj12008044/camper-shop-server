import { model, Schema } from "mongoose";
import { TOrder, TOrderedProducts } from "./order.interface";



const TOrderedProducts = new Schema<TOrderedProducts>({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new Schema<TOrder>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    cashOnDelivery: {
      type: Boolean,
      required: true,
    },
    onlinePayment: {
      type: Boolean,
      required: true,
    },
    products: [ TOrderedProducts ],
  },
  {
    timestamps: true,
  }
);

export const Order = model<TOrder>("Order", orderSchema);
