import React from "react";
import ReactDOM from "react-dom";

import QuizApp from "./QuizApp";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <QuizApp />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
