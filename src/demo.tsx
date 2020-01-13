import * as React from "react";
import * as ReactDOM from "react-dom";

// import { SButton } from "../dist/ss_react_ts_ui.min.js";
// let YanProgress = require("../dist/YanProgress.min.js")
// console.log(YanProgress)
let { SButton } = require('../dist/ss_react_ts_ui.min.js')

ReactDOM.render(
  //
  <div>
    <h1>xx</h1>
    <SButton title={'hello'} color={'#fff'} bgColor={'#54a7fd'}></SButton>
  </div>,
  document.getElementById("app")
);