import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import MainLayout from "../LayOut/MainLayout";
import SignIn from "../Pages/Login/Sign";
import SignUp from "../Pages/SignUp/SignUp";
import AddBook from "../Pages/AddBook/AddBook";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            
          },
          {
            path: '/login',
            element: <SignIn></SignIn>,
            
          },
          {
            path: '/register',
            element: <SignUp></SignUp>
          },
          {
            path: '/addBook',
            element:<PrivateRoute><AddBook></AddBook></PrivateRoute>
          }
      ]
    },
  ]);

export default Router;