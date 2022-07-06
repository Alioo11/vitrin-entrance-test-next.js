import React from "react";
import styles from "./wrapper.module.css";

const Wrapper = ({ children, ...rest }) => {
  return (
    <div className={styles.wrapper} {...rest}>
      {children}
    </div>
  );
};

export default Wrapper;
