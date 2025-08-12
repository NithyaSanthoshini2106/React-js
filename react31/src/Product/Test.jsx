import React, { useState } from "react";

const Test = () => {
  let [msg, setMsg] = useState("Hello...");

  let gmHandler = () => {
    setMsg("Good Morning");
  };
  let gnHandler = () => {
    setMsg("Good Night");
  };

  return (
    <React.Fragment>
      <h2>Test Component</h2>
      <h3>Message value: {msg}</h3>
      <button onClick={gmHandler}>GM</button>
      <button onClick={gnHandler}>GN</button>
    </React.Fragment>
  );
};

export default Test;
