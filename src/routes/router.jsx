import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout.jsx";
import Home from "../pages/home/Home.jsx";
import Signup from "../pages/signup/Signup.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "signup",
        Component: Signup
      }
    ]
  },
]);

export default router;