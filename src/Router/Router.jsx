import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import PostJob from "../Pages/PostJob";
import Myjob from "../Pages/Myjob";

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
        
      ]
    },
  ]);
  export default router;