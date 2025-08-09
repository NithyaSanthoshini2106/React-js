import React from "react";
import CompD from "./CompD";

const CompC = ({ data }) => {
  return (
    <div>
      <h3>Component C</h3>
      <hr />
   
      <CompD data={data} />
    </div>
  );
};

export default CompC;
