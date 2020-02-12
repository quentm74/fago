import React from "react";
import ReactDOM from "react-dom";
import "./style/config.css";
import "./style/style.css";
import {App} from "./components/App/App";

const mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);

Reveal.initialize({
  controls: false,
  overview: false,
  hash: true,
  transitionSpeed: 'fast',
  margin: -0.3, // to adjust when generating a pdf --- .yarn/bin/decktape http://localhost:1234/#/ Courses/A3/SIS/Ghidra/slides/test.pdf --slides 1-3
});
