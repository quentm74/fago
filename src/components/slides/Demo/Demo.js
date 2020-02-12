import React from "react";
import styles from "./Demo.css";
import {Slide} from "../../Slide/Slide";

export const demoTitles = {
  title: "Démonstration",
  subtitles: [
    {
      title: "",
      length: 1,
    },
  ],
};

export const Demo = () => {
  return (
    <React.Fragment>
      <Slide data-background-color="#222">
        <h1 style={{fontSize: '2.2em', marginBottom: '55px'}}>DEMO <mark style={{backgroundColor: '#ffff00', color: "black"}}>TIME</mark></h1>
      </Slide>
    </React.Fragment>
  );
};
