import React from "react";
import "./ripple.css";

const Ripple: React.FC = () => {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
};

export default Ripple;
