import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Navbar from "../components/Navbar";
import PostJob from "../Pages/PostJob";
import Myjob from "../Pages/Myjob";
import News from "../Pages/News";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import PrivateRoute from "../components/PrivateRoute";
import Landing from "../Pages/Landing";
import MyApplications from "../Pages/MyApplications";
import HomePageNavbar from "../components/HomePageNavbar";
import ResumeAnalyzer from "../Pages/ResumeAnalyzer";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/search",
        element: (
          <>
            <Navbar />
            <Home />
          </>
        ),
      },
      {
        path: "/post-job",
        element: (
          <PrivateRoute>
            <>
              <Navbar />
              <PostJob />
            </>
          </PrivateRoute>
        ),
      },
      {
        path: "/",
        element: (
          <>
            <HomePageNavbar />
            <Landing />
          </>
        ),
      },
      {
        path: "/my-job",
        element: (
          <PrivateRoute>
            <>
              <Navbar />
              <Myjob />
            </>
          </PrivateRoute>
        ),
      },
      {
        path: "/news",
        element: (
          <>
            <Navbar />
            <News />
          </>
        ),
      },
      {
        path: "/login",
        element: (
          <>
            <HomePageNavbar />
            <Login />
          </>
        ),
      },
      {
        path: "/signup",
        element: (
          <>
            <HomePageNavbar />
            <Signup />
          </>
        ),
      },
      {
        path: "/my-applications",
        element: (
          <PrivateRoute>
            <Navbar />
            <MyApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "/resume",
        element: (
          <>
            <HomePageNavbar />
            <ResumeAnalyzer />
          </>
        ),
      }
    ],
  },
]);

export default router;