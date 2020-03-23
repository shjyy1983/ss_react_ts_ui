import * as React from "react";
import * as ReactDOM from "react-dom";

// import { SButton } from "../dist/ss_react_ts_ui.min.js";
// let YanProgress = require("../dist/YanProgress.min.js")
// console.log(YanProgress)
const { SButton, SInput } = require('../dist/ss_react_ts_ui.min.js');
import "../dist/ss_react_ts_ui.css";
// import { SButton, SInput } from '../dist/ss_react_ts_ui.min.js';

ReactDOM.render(
  <div>
    <SButton title={'hello'} color={'#fff'} bgColor={'#54a7fd'}></SButton>
    <SInput placeholder={"输入..."} default={"Hello"} autofocus={false} width={'200px'} padding={'0 4px'} borderWidth={1} borderColor={"#ddd"} clearable={true}></SInput>
  </div>,
  document.getElementById("app")
);