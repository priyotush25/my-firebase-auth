import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";

const route = createBrowserRouter([
  {
    index: true,
    element: <RootLayout />,
  },
]);

export default route;
