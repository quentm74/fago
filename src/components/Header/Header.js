import React, {useState, useEffect} from "react";
import styles from "./Header.css";
import Reveal from "reveal.js";

export const Header = ({slideIndex, hideOnSlides = [], titles = []}) => {
  const [idCurrentTitleLevel1, idCurrentTitleLevel2] = useTitles(slideIndex, titles);
  return !hideOnSlides.includes(slideIndex) ? (
    <div className={styles.Header}>
      <div className={styles.HeaderLevel1}>
        {titles.map((title, index) => (
          <div key={index}
               className={`${styles.HeaderLevel1} ${index === idCurrentTitleLevel1 ? styles.selected : ''}`}>
            {title.title}
          </div>
        ))}
      </div>
      <div className={styles.HeaderLevel2}>
        {titles[idCurrentTitleLevel1].subtitles.map((title, index) => (
          <div key={index}
               className={`${styles.HeaderLevel2} ${index === idCurrentTitleLevel2 ? styles.selected : ''}`}>
            {title.title}
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

const useTitles = (slideIndex, titles) => {
  const [idCurrentTitleLevel1, setIdCurrentTitleLevel1] = useState(0);
  const [idCurrentTitleLevel2, setIdCurrentTitleLevel2] = useState(0);
  useEffect(() => {
    const indexes = findIndexes(slideIndex, titles);
    if (indexes !== -1) {
      const [idCurrentTitleLevel1, idCurrentTitleLevel2] = indexes;
      setIdCurrentTitleLevel1(idCurrentTitleLevel1);
      setIdCurrentTitleLevel2(idCurrentTitleLevel2);
    }
  }, [slideIndex, titles]);
  return [idCurrentTitleLevel1, idCurrentTitleLevel2]
};

const findIndexes = (slideIndex, titles) => {
  let sumLength = 0;
  for (const [i, title] of titles.entries()) {
    for (const [j, subtitle] of title.subtitles.entries()) {
      sumLength += subtitle.length;
      if (slideIndex <= sumLength) {
        return [i, j];
      }
    }
  }
  return -1;
};
