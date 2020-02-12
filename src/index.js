import React from "react";
import ReactDOM from "react-dom";
import "./style/config.css";
import "./style/style.css";
import {Root} from "./components/App/App";

const mountNode = document.getElementById("app");
ReactDOM.render(<Root/>, mountNode);
