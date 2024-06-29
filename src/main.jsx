import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import PostCreate, { action as postCreateAction } from "./pages/Post/Create";
import PostDetail, { loader as postDetailLoader } from "./pages/Post/Detail";
import PostListPage from "./pages/Post/List";
import Layout from "./routes/Layout";
import PostListRoute, { loader as postListLoader } from "./routes/PostList";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      {
        path: "/post",
        element: <PostListRoute />,
        loader: postListLoader,
        children: [
          {
            path: "list",
            element: <PostListPage />,
          },
          { path: "create", element: <PostCreate />, action: postCreateAction },
          {
            path: "detail/:postId",
            element: <PostDetail />,
            loader: postDetailLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
