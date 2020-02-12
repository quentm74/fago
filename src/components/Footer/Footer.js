import React, {useState, useEffect} from "react";
import styles from "./Footer.css";
import Reveal from "reveal.js";

export const Footer = ({slideIndex, hideOnSlides = []}) => {
  return !hideOnSlides.includes(slideIndex) ? (
    <div className={styles.Footer}>
      <div>
        Pressoare - Résultats d'étude
      </div>
      <div className={styles.slideIndex}>
        <b>{slideIndex + 1}</b> / {Reveal.getTotalSlides()}
      </div>
    </div>
  ) : null;
};
