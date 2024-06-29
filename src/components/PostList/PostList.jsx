import { Link } from "react-router-dom";
import styles from "./PostList.module.css";
import Post from "../Post";

const PostListComponent = ({ posts }) => {
  return (
    <>
      {0 < posts.length ? (
        <ul className={styles.posts}>
          {posts.map((post, index) => (
            <Link to={`/post/detail/${post.id}`} key={index}>
              <Post author={post.author} content={post.content} />
            </Link>
          ))}
        </ul>
      ) : (
        <div>There are no posts yet.</div>
      )}
    </>
  );
};

export default PostListComponent;
