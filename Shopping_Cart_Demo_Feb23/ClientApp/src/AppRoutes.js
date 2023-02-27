import { Product } from "./components/Product";
import { Cart } from "./components/Cart";

const AppRoutes = [
  {
    index: true,
    element: <Product />
  },
  {
    path: '/cart',
    element: <Cart />
  },
];

export default AppRoutes;
