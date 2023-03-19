import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Main/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Home />,
      },
    ],
  },
]);

export default routes;
