import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import RootLayout from "../RootLayout/RootLayout";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default route;
