import express from 'express'
import { productRoutes } from '../modules/Product/product.route'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/',
    route: productRoutes,
  },
]

moduleRoutes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
