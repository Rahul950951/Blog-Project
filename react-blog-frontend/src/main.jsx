import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx'
import SingleBlog from './pages/SingleBlog.jsx';

import Contact from './pages/Contact.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
     {
      path: "/",
      element: <Home/>
     },
     {
      path: "/blogs",
      element: <Blogs/>
     },
     {
      path: "/about",
      element: <About/>
    },
    {
     path: "/Contact",
     element: <Contact/>
      
    },
    {
      path: "/services",
      element: <Services/>
    },
    {
      path: "/blogs/:id",
      element: <SingleBlog/>,
      loader: ({params}) => fetch(`https://blog-project-123.onrender.com/blogs/${params.id}`)
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
