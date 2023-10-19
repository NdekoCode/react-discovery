
import Layout from "../Layout";

import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary.tsx";
import About from "../pages/About.tsx";
import Blog from "../pages/Blog.tsx";
import BlogPost from "../pages/BlogPost.tsx";
import Contact from "../pages/Contact.tsx";
import Home from "../pages/Home.tsx";
import Product from "../pages/Product.tsx";
import TemperatureConverter from "../pages/TemperatureConverter.tsx";
import Todos from "../pages/Todos.tsx";
import UserItems from "../pages/UserItems.tsx";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        {
          path: "/blog",
          element: (
            <ErrorBoundary>
              <Blog />
            </ErrorBoundary>
          ),
        },
        {
          path: "/blog/:title",
          element: <BlogPost />,
        },
        { path: "/about", element: <About /> },
        { path: "/temperature", element: <TemperatureConverter /> },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "/todos",
          element: <Todos />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/users",
          element: <UserItems />,
        },
      ],
    },
  ]);