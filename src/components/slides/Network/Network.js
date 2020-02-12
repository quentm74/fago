import React from "react";
import styles from "./Network.css";
import {Slide} from "../../Slide/Slide";
import trace from "./trace.png";
import attack1 from "./AttackFlow1.svg";
import attack2 from "./AttackFlow2.svg";
import attack3 from "./AttackFlow3.svg";
import attack4 from "./AttackFlow4.svg";
import attack5 from "./AttackFlow5.svg";
import attack6 from "./AttackFlow6.svg";
import attack7 from "./AttackFlow7.svg";
import attack8 from "./AttackFlow8.svg";
import attack9 from "./AttackFlow9.svg";

export const networkTitles = {
  title: "Analyse réseau",
  subtitles: [
    {
      title: "Trace réseau",
      length: 1,
    },
    {
      title: "Procédure d'attaque",
      length: 1,
    },
  ],
};

export const Network = () => {
  return (
    <React.Fragment>
      <Slide data-background-color="#f6f8fa">
        <img src={trace} alt="trace"/>
      </Slide>
      <Slide data-background-color="#f6f8fa">
        <img alt="attack" className={`${styles.attack_img}`} src={attack1}/>
        <img alt="attack" className={`fragment ${styles.attack_img}`} src={attack2}/>
        <img alt="attack" className={`fragment ${styles.attack_img}`} src={attack3}/>
        <img alt="attack" className={`fragment ${styles.attack_img}`} src={attack4}/>
        <img alt="attack" className={`fragment ${styles.attack_img}`} src={attack5}/>
        <img alt="attack" className={`fragment ${styles.attack_img}`} src={attack6}/>
        <img alt="attack" className={`fragment ${styles.attack_img}`} src={attack7}/>
        <img alt="attack" className={`fragment ${styles.attack_img}`} src={attack8}/>
        <img alt="attack" className={`fragment ${styles.attack_img}`} src={attack9}/>
      </Slide>
    </React.Fragment>
  );
};
