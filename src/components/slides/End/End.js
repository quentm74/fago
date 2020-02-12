import React from "react";
import styles from "./End.css";
import {Slide} from "../../Slide/Slide";

export const End = () => {
  return (
    <React.Fragment>
      <Slide data-background-color="#222">
        <h1 style={{fontSize: '2.2em', marginBottom: '55px'}}>Merci de votre <mark style={{backgroundColor: '#ffff00', color: "black"}}>écoute</mark></h1>
      </Slide>
    </React.Fragment>
  );
};
