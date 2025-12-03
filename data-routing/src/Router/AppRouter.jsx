import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "../App.jsx";
import About from "../pages/About.jsx";
import HomeLayout from "../layout/HomeLayout.jsx";
import Home from "../pages/Home.jsx";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
