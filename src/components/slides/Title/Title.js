import React from "react";
import styles from "./Title.css";
import {Slide} from "../../Slide/Slide";

export const Title = () => {
  return (
    <Slide data-background-color="#222">
      <h1 className={styles.title}>
        Résultats <mark>d'étude</mark>
      </h1>
      <div>
        Pressoare
      </div>
      <div className={styles.names}>
        <b>Marianne FAURE</b> & <b>Quentin MICHEL</b><br/>
        <span className={styles.link}>https://quentm74.github.io/bov-slides/index.html#/</span>
      </div>
    </Slide>
  );
};
