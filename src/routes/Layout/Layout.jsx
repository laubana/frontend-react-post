import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Header from "../../components/Header";

const LayoutComponent = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LayoutComponent;
