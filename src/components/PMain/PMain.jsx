import React, { Children } from "react";
import PFooter from "../PFooter/PFooter";
import PHeader from "../PHeader/PHeader";
import "./PMain.scss";

const PMain = ({children}) => {
  return (
    <main className="main lp ">
      {children}
    </main>
  );
};
export default PMain;
