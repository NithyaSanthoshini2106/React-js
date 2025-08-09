import React from "react";
import CompA from "./CompA";

const App = () => {
  const message = "Hello from App Component";

  return (
    <div>
      <h2>App Component</h2>
      <hr />
      {/* Pass message to CompA */}
      <CompA data={message} />
    </div>
  );
};

export default App;
