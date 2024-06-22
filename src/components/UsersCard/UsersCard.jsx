import React from "react";
import "./UsersCard.scss";
import { useDispatch, useSelector} from "react-redux";
import Question from "../Question/Question";
import img from "../../../public/Spinner@1x-1.0s-200px-200px.svg";
import { useNavigate } from "react-router-dom";
import {logout} from '../../store/slice/authSlice'

const UsersCard = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const logoutuser = () => {
    navigate('/RegisterForm');
    dispatch(logout())
  }

  if (!user) {
    return (
      <div className="loading">
        <img src={img} alt="imgLoading" />
      </div>
    );
  }

  return (
    <>
      <div className="UsersCard">
        <div className="UsersCard_Button">
          <button id="logoutButton" onClick={() => logoutuser()}>Выйти</button>
        </div>

        <div className="UsersCard_bg">
          <div className="UsersCard_img">
            <img
              src="https://s00.yaplakal.com/pics/pics_original/5/0/6/17827605.jpg"
              alt="img"
            />
          </div>
          <h1>{user.username}</h1>
        </div>
      </div>
      <div className="UaersRecords">
        <div className="UaersRecords_Div">
          <h2
            className="
          UaersRecords_Div_h2"
          >
            Приемы
          </h2>
          <p className="UaersRecords_Div_p">0</p>
        </div>
        <div className="UaersRecords_Div">
          <h2 className="UaersRecords_Div_h2">Назначения</h2>
          <p className="UaersRecords_Div_p">0</p>
        </div>
      </div>
      <hr />
      <Question />
    </>
  );
};

export default UsersCard;
