import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import PostJob from "../Pages/PostJob";
import MyJobs from "../Pages/MyJobs";
import Salary from "../Pages/Salary";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../Components/Login";
import DetailJobs from "../Pages/DetailJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post-jobs",
        element: <PostJob />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
      {
        path: "/salary",
        element: <Salary />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/job/:id",
        element: <DetailJobs />,
      },
      {
        path: "edit-job/:id",
        element: <UpdateJob />,
        loader: async ({ params }) => {
          return fetch(`http://localhost:3000/job/${params.id}`);
        },
      },
    ],
  },
]);

export default router;
