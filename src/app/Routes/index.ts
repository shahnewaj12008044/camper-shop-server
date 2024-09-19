import { Router } from "express";
import { ProductRoute } from "../modules/Product/Product.route";
import { OrderRoute } from "../modules/Order/order.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/products", //here will be routes and paths
    route: ProductRoute,
  },
  {
    path: "/orders", //here will be routes and paths
    route: OrderRoute,
  },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
