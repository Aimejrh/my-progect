import React from "react";
import Doctorsprof from "../components/Doctorspage/Doctorspage";
import ListDestinations from "../components/ListDestinations/ListDestinations";
import PFooter from "../components/PFooter/PFooter";
import AboutClinic from "../components/AboutClinic/AboutClinic";

const DoctarsPage = () => {
  return (
    <div style={{paddingTop: "140px"}}>
      {/* <div className="DoctarsPage"> */}
      {/* <AboutClinic Text_logo={}/> */}
      <ListDestinations />
      <Doctorsprof />
      <PFooter />
      {/* </div> */}
    </div>
  );
};

export default DoctarsPage;
