import React from "react";
import LogoComp from "../components/LogoComp/LogoComp";
import ListDestinations from "../components/ListDestinations/ListDestinations";
import Peculiarities from "../components/Peculiarities/Peculiarities";
import DoctorsList from "../components/DoctorsList/DoctorsList";
import Question from "../components/Question/Question";
import Diagnostics from "../components/Diagnostics/Diagnostics";
import Treatment from "../components/Treatment/Treatment";
import MyCustomSwiper from "../components/Swiper/MyCustomSwiper";
import AnswersQuestion from "../components/AnswersQuestion/AnswersQuestion";
import PFooter from "../components/PFooter/PFooter";

const HomePage = () => {
  return (
    <>
      <LogoComp />
      <ListDestinations />
      <Peculiarities />
      <div>
        <DoctorsList />
        <hr />
        <Question />
      </div>
      <Diagnostics />
      <div>
        <Treatment />
        <hr />
        <Question />
        <hr />
        <MyCustomSwiper />
        {/* <hr /> */}
        <AnswersQuestion />
        <hr />
        <Question />
        <hr />
        <PFooter />
      </div>
    </>
  );
};

export default HomePage;
