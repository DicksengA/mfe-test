import t from"react";import{createRoot as s}from"react-dom/client";import"@patternfly/react-core/dist/styles/base.css";import{Button as c}from"@patternfly/react-core";var m=()=>{let[e,n]=t.useState(0),l=()=>{console.log("Clicked"),n(r=>r+1)};return t.createElement(c,null,"Counter ",e)},o=class extends HTMLElement{connectedCallback(){s(this).render(t.createElement(m,null))}};customElements.define("mxms-button",o);export{m as MyButton,o as MyButtonMFE};
