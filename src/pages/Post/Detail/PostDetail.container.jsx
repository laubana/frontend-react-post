import { useLoaderData, useNavigate } from "react-router-dom";
import PostDetailView from "./PostDetail.view";

const PostDetailContainer = () => {
  const navigate = useNavigate();
  const post = useLoaderData();

  const handleClose = () => {
    navigate("/post/list");
  };

  return <PostDetailView onClose={handleClose} post={post} />;
};

export default PostDetailContainer;

export const loader = async ({ params }) => {
  const usersResponse = await fetch(
    `${import.meta.env.VITE_BACKEND_URL || "http://localhost:8080"}/users`
  );
  const usersData = await usersResponse.json();

  const postResponse = await fetch(
    `${import.meta.env.VITE_BACKEND_URL || "http://localhost:8080"}/posts/${
      params.postId
    }`
  );
  const postData = await postResponse.json();

  return {
    id: postData.id,
    author: usersData.find((user) => user.id === postData.userId).name,
    content: postData.body,
  };
};
