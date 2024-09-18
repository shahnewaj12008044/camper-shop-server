import { model, Schema } from "mongoose";
import { TProduct } from "./Product.interface";


const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    ratings: {
      type: Number,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isDeleted:{
        type:Boolean,
        default:false,
    }
  },
  {
    timestamps: true,
  }
);

productSchema.pre('find',async function () {
    this.find({isDeleted:{$ne:true}})
})
productSchema.pre('findOne',async function () {
    this.find({isDeleted:{$ne:true}})
})

export const Product = model<TProduct>("Product", productSchema);
