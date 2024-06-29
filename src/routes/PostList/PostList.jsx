import { Outlet, useLoaderData } from "react-router-dom";
import styles from "./PostList.module.css";
import PostList from "../../components/PostList";

const LayoutComponent = () => {
  const posts = useLoaderData();

  return (
    <>
      <Outlet />
      <PostList posts={posts} />
    </>
  );
};

export default LayoutComponent;

export const loader = async () => {
  const usersResponse = await fetch(
    `${import.meta.env.VITE_BACKEND_URL || "http://localhost:8080"}/users`
  );
  const usersData = await usersResponse.json();

  const postsResponse = await fetch(
    `${import.meta.env.VITE_BACKEND_URL || "http://localhost:8080"}/posts`
  );
  const postsData = await postsResponse.json();

  return postsData.map((post) => ({
    id: post.id,
    author: usersData.find((user) => user.id === post.userId).name,
    content: post.body,
  }));
};
