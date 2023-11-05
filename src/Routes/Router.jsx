import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import MainLayout from "../LayOut/MainLayout";
import SignIn from "../Pages/Login/Sign";
import SignUp from "../Pages/SignUp/SignUp";
import AddBook from "../Pages/AddBook/AddBook";
import PrivateRoute from "./PrivateRoute";
import Books from "../Pages/Books/Books";
import SingleBook from "../Pages/Books/SingleBook";

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
          },
          {
            path: '/categories/:category',
            element: <Books></Books>,
            loader: ()=>fetch('http://localhost:5000/booksCategory')
          },
          {
            path:'/books/:id',
            element:<SingleBook></SingleBook>,
            loader: ({params})=>fetch(`http://localhost:5000/books/${params.id}`)

          }

      ]
    },
  ]);

export default Router;