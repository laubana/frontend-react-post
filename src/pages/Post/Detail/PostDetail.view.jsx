import styles from "./PostDetail.module.css";
import Modal from "../../../components/Modal";
import Post from "../../../components/Post";

const PostDetailView = ({ onClose, post }) => {
  return (
    <>
      <Modal onClose={onClose}>
        {post ? <Post author={post.author} content={post.content} /> : <></>}
      </Modal>
    </>
  );
};

export default PostDetailView;
