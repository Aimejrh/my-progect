import React from "react";
import "./PFooter.scss";
import FooterLinks from "./FooterLinks/FooterLinks";
import Contacts from "../Contacts/Contacts";
import Gmail from "../Gmail/Gmail";

const PFooter = () => {
  return (
    <footer className="footer">
      <Contacts />
      <FooterLinks />
      <Gmail />
    </footer>
  );
};
export default PFooter;
