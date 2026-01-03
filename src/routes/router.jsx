import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout.jsx";
import Home from "../pages/home/Home.jsx";
import Signup from "../pages/signup/Signup.jsx";
import SignIn from "../pages/signin/SignIn.jsx";
import JobDetails from "../pages/shared/JobDetails.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import JobApply from "../pages/jobApply/JobApply.jsx";
import MyApplications from "../pages/myApplication/MyApplications.jsx";
import AddJob from "../pages/addjob/AddJob.jsx";
import MyPostedJob from "../pages/mypostedjob/MyPostedJob.jsx";
import ViewApplications from "../pages/viewapplications/ViewApplications.jsx";


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
      },
      {
        path: "signin",
        Component: SignIn
      },
      {
        path: 'jobs/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`),
        Component: JobDetails,
      },
      {
        path: "jobapply/:id",
        element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
      },
      {
        path: "myapplications",
        element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
      },
      {
        path: "addjob",
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path: "mypostedjob",
        element: <PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>
      },
      {
        path: "applications/:id",
        element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/applications/job/${params.id}`)
      }
    ]
  },
]);

export default router;