import React from "react";
import ReactDOM from "react-dom/client"

let ReactComponent = () => <h2 className="heading3">I am a React Component!</h2>
let JsxHeading = () => 
<>
<h1 className="heading1">Namaste React using JSX!</h1>
<ReactComponent />
<h3 className="heading2">React Is Super Cool!</h3>
</>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<JsxHeading />);