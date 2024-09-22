import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import PostJob from "../Pages/PostJob";
import Myjob from "../Pages/Myjob";
import News from "../Pages/News";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {path:"/",element:<Home/>},
        {
          path:"/post-job",
          element:<PostJob/>
          
        },
        {
          path:"/my-job",
          element:<Myjob/>
        },
        {
          path:"/news",
          element:<News/>
        },
        { 
          path:"/login",
          element:<Login/>
        },
        {
          path:"/signup",
          element:<Signup/>
        }
        
      ]
    },
  ]);
  export default router;