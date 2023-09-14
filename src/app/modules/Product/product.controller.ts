import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { productService } from './product.service'

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await productService.createProduct()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product Created Successfully',
    data: result,
  })
})

export const productController = {
  createProduct,
}
