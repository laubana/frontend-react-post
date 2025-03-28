import { MdPostAdd, MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const HeaderComponent = ({}) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to="/post/create">
          <button className={styles.button}>
            <MdPostAdd size={18} />
            New Post
          </button>
        </Link>
      </p>
    </header>
  );
};

export default HeaderComponent;
