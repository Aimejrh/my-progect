import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../store/slice/passwordSlice";
import img from "../../../public/Spinner@1x-1.0s-200px-200px.svg"

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  return (
    <div className="Register">
      <h1>сброс пароля</h1>
      <form onSubmit={handleSubmit}>
        <label className="Registercon" >
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit" className="RegisterButton" disabled={<div className="loading"><img src={img} alt="imgLoading" /></div>}>
          Send Reset Link
        </button>
      </form>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default ForgotPassword;
