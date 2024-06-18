import React from "react";
import "./Layout.scss";
import PMain from "../components/PMain/PMain";
import PFooter from "../components/PFooter/PFooter";
import NavBar from "../components/PHeader/PheaderCom/NavBar";
const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <NavBar />

      <PMain>{children}</PMain>

    </div>
  );
};
export default Layout;
