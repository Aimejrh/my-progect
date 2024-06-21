import React from "react";
import "./UsersCard.scss";
import { useSelector } from "react-redux";

const UsersCard = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <div>Loading...</div>;
  }

  console.log(user.tokens.access_token);
  console.log(user.tokens.refresh_token);

  return (
    <div className="UsersCard">
      <h1>Добро пожаловать, {user.username}!</h1>
      <p>ID: {user.id}</p>
      {user.tokens && (
        <div>
          <p>Access Token: {user.tokens.access_token}</p>
          <p>Refresh Token: {user.tokens.refresh_token}</p>
        </div>
      )}
    </div>
  );
};

export default UsersCard;
