/* eslint-disable @typescript-eslint/no-explicit-any */

import { Model } from 'mongoose'

export type IProduct = {
  title: string
  keys: string[]
  detail: string
  features: Record<string, any>
}

export type ProductModel = Model<IProduct, Record<string, unknown>>
