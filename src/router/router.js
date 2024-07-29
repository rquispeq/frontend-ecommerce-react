import { createBrowserRouter } from "react-router-dom"
import Home from "../components/pages/Home"
import List from "../components/pages/admin/products/List"
import ProductPage from "../components/pages/ProductPage"
import ProductSearch from "../components/pages/ProductSearch"
import Login from "../components/pages/Login"
import ProductEdit from "../components/pages/admin/products/Edit"
import ProductCreate from "../components/pages/admin/products/Create"
import UserList from "../components/pages/admin/users/List"
import OrderList from "../components/pages/admin/orders/List"
import Register from "../components/pages/Register"
import Cart from "../components/pages/Cart"
import Order from "../components/pages/user/Order"
import UserOrderList from "../components/pages/user/orders/List"
import UserDetailOrderList from "../components/pages/user/detailorder/List"
import AdminDetailOrderList from "../components/pages/admin/orders/DetailOrder"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    children: [
      {
        path: "products",
        element: <List />,
      },
      {
        path: "products/create",
        element: <ProductCreate />,
      },
      {
        path: "products/edit/:id",
        element: <ProductEdit />,
      },
      {
        path: "users",
        element: <UserList />,
      },
      {
        path: "orders",
        element: <OrderList />,
      },
      {
        path: "orders/details/:id",
        element: <AdminDetailOrderList />,
      },
    ],
  },
  {
    path: "/products",
    children: [
      {
        path: ":id",
        element: <ProductPage />,
      },
      {
        path: "search",
        element: <ProductSearch />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "order",
    element: <Order />,
  },
  {
    path: "user/orders",
    element: <UserOrderList />,
  },
  {
    path: "user/orders/details/:id",
    element: <UserDetailOrderList />,
  },
])
export default router
