import React, {useState, useEffect} from "react";
import styles from './App.css';
import {Title} from "../slides/Title/Title";
import {Footer} from "../Footer/Footer";
import {Header} from "../Header/Header";
import Reveal from "reveal.js";
import {Network, networkTitles} from "../slides/Network/Network";
import {End} from "../slides/End/End";
import {Server, serverTitles} from "../slides/Server/Server";
import {Payload, payloadTitles} from "../slides/Payload/Payload";
import {Demo, demoTitles} from "../slides/Demo/Demo";

const hideBarsOnSlides = [0, 14, 15]; // TODO

export const App = () => {
  const slideIndex = useSlideIndex();
  return (
    <div className={styles.App}>
      <div className="reveal">
        <Header slideIndex={slideIndex} hideOnSlides={hideBarsOnSlides} titles={[
          networkTitles,
          payloadTitles,
          serverTitles,
          demoTitles,
        ]}/>
        <div className="slides">
          <Title/>
          <Network/>
          <Payload/>
          <Server/>
          <Demo/>
          <End/>
        </div>
        <Footer slideIndex={slideIndex} hideOnSlides={hideBarsOnSlides}/>
      </div>
    </div>
  );
};

const useSlideIndex = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    setSlideIndex(Reveal.getIndices().h);
    Reveal.addEventListener('slidechanged', () => {
      setSlideIndex(Reveal.getIndices().h);
    });
  }, []);
  return slideIndex;
};
