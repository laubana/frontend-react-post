import { useNavigate, redirect } from "react-router-dom";
import PostCreateView from "./PostCreate.view";

const PostCreateContainer = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/post/list");
  };

  return <PostCreateView onCancel={handleCancel} />;
};

export default PostCreateContainer;

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    const newPost = Object.fromEntries(formData);
    await fetch(
      `${import.meta.env.VITE_BACKEND_URL || "http://localhost:8080"}/posts`,
      {
        method: "POST",
        body: JSON.stringify(newPost),
      }
    );

    return redirect("/post/list");
  } catch (error) {
    console.error(error);
  }
};
