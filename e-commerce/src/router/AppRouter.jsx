import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import AuthLayout from "../Layout/AuthLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Users from "../pages/Users";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "../Layout/ProtectedRoute";
import PublicRoute from "../Layout/PublicRoute";
import ProductDetails from "../pages/ProductDetails";
import { MyStore } from "../context/ContextProvider";
import { useContext } from "react";

const AppRouter = () => {
  const { setProductData, productData } = useContext(MyStore);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <HomeLayout />,
          children: [
            {
              index: true,
              path: "",
              loader: async () => {
                const res = await axios.get(
                  "https://dummyjson.com/products?limit=50"
                );
                return res.data.products;
              },
              element: <Home />,
            },
            {
              path: "users",
              element: <Users />,
            },
            {
              path: "products",
              loader: async () => {
                const res = await axios.get(
                  "https://dummyjson.com/products?limit=50"
                );
                return res.data.products;
              },
              hydrateFallbackElement: <h1>Loading...</h1>,
              element: <Products />,
            },
            {
              path: "cart",
              element: <Cart />,
            },
            {
              path: "about",
              element: <About />,
            },
            {
              path: "products/productDetails/:id",
              element: <ProductDetails />,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <PublicRoute />,
      children: [
        {
          index: true,
          element: <AuthLayout />,
        },
      ],
    },
  ]);

  <ToastContainer />;
  return <RouterProvider router={router} />;
};

export default AppRouter;
