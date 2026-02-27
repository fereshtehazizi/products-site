import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import ProductsLayout from "./pages/productLayout";
import ProductsList from "./pages/productList";
import ProductDetails from "./pages/productDetails";
import NotFound from "./pages/notFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "products",
        element: <ProductsLayout />,
        children: [
          { index: true, element: <ProductsList /> },
          { path: ":id", element: <ProductDetails /> },
        ],
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}