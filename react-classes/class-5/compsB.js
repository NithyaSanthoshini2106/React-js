import React from "react";
import CompC from "./CompC";

const CompB = ({ data }) => {
  return (
    <div>
      <h3>Component B</h3>
      <hr />
      {/* Pass data to CompC */}
      <CompC data={data} />
    </div>
  );
};

export default CompB;
