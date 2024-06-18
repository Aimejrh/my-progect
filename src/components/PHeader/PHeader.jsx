import React from "react";
import "./PHeader.scss";

const PHeader = ({ children }) => {
  return <header className="header">{children}</header>;
};

export default PHeader;
