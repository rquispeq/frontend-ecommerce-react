import { createBrowserRouter } from "react-router-dom"
import Home from "../components/pages/Home"
import List from "../components/pages/admin/products/List"
import ProductPage from "../components/pages/ProductPage"
import ProductSearch from "../components/pages/ProductSearch"
import Login from "../components/pages/Login"
import ProductEdit from "../components/pages/admin/products/Edit"
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
    ],
  },
  {
    path: "/product",
    children: [
      {
        path: ":id",
        element: <ProductPage />,
      },
      {
        path: "search",
        element: <ProductSearch />,
      },
      {
        path: "edit/:id",
        element: <ProductEdit />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
])
export default router
