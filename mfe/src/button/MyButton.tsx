import React from "react"
import {createRoot} from "react-dom/client";
import '@patternfly/react-core/dist/styles/base.css';
import {Button} from "@patternfly/react-core";

export const MyButton = () => {
    const [counter, setCounter] = React.useState(0)
    const handleClick = () => {
        console.log("Clicked")
        setCounter(prevState => prevState + 1)
    }
    return <Button
    >Counter {counter}</Button>
}

export class MyButtonMFE extends HTMLElement {
    connectedCallback() {
        let root = createRoot(this);
        root.render(<MyButton/>)
    }
}

customElements.define("mxms-button", MyButtonMFE)