import React from "react";
import "./UsersCard.scss";
import { useSelector } from "react-redux";
import img from '../../../public/Spinner@1x-1.0s-200px-200px.svg'
const UsersCard = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  if (!user) {
    return <div className="loading"><img src={img} alt="imgLoading" /></div>;
  }

  return (
    <div className="UsersCard">
      <h1>Добро пожаловать, {user.username}!</h1>
      <p>ID: {user.id}</p>
      {user.tokens && (
        <div>
          <p>Access Token: {localStorage.getItem("accessToken")}</p>
          <p>Refresh Token: {localStorage.getItem("refreshToken")}</p>
        </div>
      )}
    </div>
  );
};

export default UsersCard;
