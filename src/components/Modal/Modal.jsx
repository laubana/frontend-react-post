import { useRef } from "react";

import styles from "./Modal.module.css";

const ModalComponent = ({ onClose, children }) => {
  const ref = useRef();

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <div ref={ref} className={styles.backdrop} onClick={handleClose} />
      <div className={styles.modal}>{children}</div>
    </>
  );
};

export default ModalComponent;
