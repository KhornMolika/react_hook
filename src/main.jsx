import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./page/products/Product.jsx";
import Layout from "./components/layout/Layout.jsx"
import ProductDetail from "./page/product-details/ProductDetail.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
import News from "./page/news/News.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/product-details",
        element: <ProductDetail/>
      }
    ],
  },
  // {
  //   path: "/products",
  //   element: <Products />
  // },
  // {
  //   path: "/about-us",
  //   element: <AboutUs />
  // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
