import React from "react";
import CompC from "./CompC";

const CompB = ({ props }) => {
  return 
    <div>
      <h3>Component B</h3>
      
      <hr />
      <CompC data={data} />
    </div>
};

export default CompB;
