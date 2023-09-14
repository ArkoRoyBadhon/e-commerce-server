import { Schema, model } from 'mongoose'
import { IProduct, ProductModel } from './product.interface'

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    keys: {
      type: [String],
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
    features: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Products = model<IProduct, ProductModel>('Products', ProductSchema)
