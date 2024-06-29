import styles from "./Post.module.css";

const PostComponent = ({ author, content }) => {
  return (
    <div className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default PostComponent;
