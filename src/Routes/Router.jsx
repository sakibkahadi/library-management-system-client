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
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import Read from "../Pages/Read/Read";
import AllBooks from "../Pages/AllBooks/AllBooks";
import UpdatedBooks from "../Pages/UpdatedBooks/UpdatedBooks";

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
            element: <PrivateRoute><Books></Books></PrivateRoute>,
            loader: ()=>fetch('https://libary-management-system-server.vercel.app/booksCategory')
          },
          {
            path:'/books/:id',
            element:<PrivateRoute><SingleBook></SingleBook></PrivateRoute>,
            loader: ({params})=>fetch(`https://libary-management-system-server.vercel.app/books/${params.id}`)
          },
          {
            path:'/borrowedBooks',
            element:<PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>,
            // loader: ({params})=>fetch(`https://libary-management-system-server.vercel.app/books/${params.id}`)
          },
          {
            path:'/reads/:id',
            element:<PrivateRoute><Read></Read></PrivateRoute>,
           loader: ({params})=>fetch(`https://libary-management-system-server.vercel.app/books/${params.id}`)
          },
          {
            path:'/allBooks',
            element:<PrivateRoute><AllBooks></AllBooks></PrivateRoute> ,
            
          },
          {
            path:'/allBooks/:id',
            element:<PrivateRoute><UpdatedBooks></UpdatedBooks></PrivateRoute> ,
            loader:({params})=>fetch(`https://libary-management-system-server.vercel.app/allBooks/${params.id}`, {credentials:"include"})
            
          }

      ]
    },
  ]);

export default Router;