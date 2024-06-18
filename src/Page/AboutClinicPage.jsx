import React from "react";
import PFooter from "../components/PFooter/PFooter";
import AboutClinic from "../components/AboutClinic/AboutClinic";
import Direction from "../components/Direction/Direction";
import OurAdvantages from "../components/OurAdvantages/OurAdvantages";
import Guarantee from "../components/Guarantee/Guarantee";
import Question from "../components/Question/Question";

const AboutClinicPage = () => {
  return (
    <>
      <div>
        <AboutClinic Text_logo={"O КОМПАНИИ"} />
        <Direction />
      </div>
      <OurAdvantages />
      <div>
        <Guarantee />
        <hr />
        <Question />
        <hr />
        <PFooter />
      </div>
    </>
  );
};

export default AboutClinicPage;
