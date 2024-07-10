import { createBrowserRouter } from "react-router-dom"
import Home from "../components/pages/Home"
import List from "../components/pages/admin/products/List"
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
])
export default router
