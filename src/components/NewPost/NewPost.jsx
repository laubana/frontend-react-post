import { Form } from "react-router-dom";
import styles from "./NewPost.module.css";

const NewPostComponent = ({ onCancel }) => {
  const handleCancel = () => {
    onCancel();
  };

  return (
    <Form method="POST" className={styles.form}>
      <div className={styles.group}>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author" required />
      </div>
      <div className={styles.group}>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" required rows={3} />
      </div>
      <div className={styles.actions}>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </Form>
  );
};

export default NewPostComponent;
