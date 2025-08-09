import React from "react";
import CompB from "./CompB";

const CompA = ({ data }) => {
  return (
    <div>
      <h3>Component A</h3>
      <hr />
      {/* Pass data to CompB */}
      <CompB data={data} />
    </div>
  );
};

export default CompA;
