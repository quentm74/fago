import React from "react";
import styles from "./Slide.css";

export const Slide = ({children, ...props}) => {
  return (
    <section {...props}>
      <div className={styles.Slide}>
        {children}
      </div>
    </section>
  );
};
