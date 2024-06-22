import React from "react";
import Button from "../Button/Button";
import "./Question.scss"

const Question = () => {
  return (
    <div className="Question">
      <p className="Question_p">Есть вопросы? Мы вас проконсультируем</p>
      <Button Button_link={"/RecordsPage"} Button_Style={"signUp"} Button_text={"оставить заявку"}/>
    </div>
  );
};

export default Question;
