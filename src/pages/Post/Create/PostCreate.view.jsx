import styles from "./PostCreate.module.css";
import Modal from "../../../components/Modal";
import NewPost from "../../../components/NewPost";

const PostCreateView = ({ onCancel }) => {
  return (
    <>
      <Modal onClose={onCancel}>
        <NewPost onCancel={onCancel} />
      </Modal>
    </>
  );
};

export default PostCreateView;
