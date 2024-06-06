import "./chunk-V4OQ3NZ2.js";

// src/button/MyButton.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import "@patternfly/react-core/dist/styles/base.css";
import { Button } from "@patternfly/react-core";
var MyButton = () => {
  const [counter, setCounter] = React.useState(0);
  const handleClick = () => {
    console.log("Clicked");
    setCounter((prevState) => prevState + 1);
  };
  return /* @__PURE__ */ React.createElement(
    Button,
    null,
    "Counter ",
    counter
  );
};
var MyButtonMFE = class extends HTMLElement {
  connectedCallback() {
    let root = createRoot(this);
    root.render(/* @__PURE__ */ React.createElement(MyButton, null));
  }
};
customElements.define("mxms-button", MyButtonMFE);
export {
  MyButton,
  MyButtonMFE
};
//# sourceMappingURL=MyButton-XI5D7VG4.js.map
