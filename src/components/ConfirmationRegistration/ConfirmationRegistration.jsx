import "./ConfirmationRegistration.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmRegistration } from "../../store/slice/ConfirmationRegistrationSlice";
import img from "../../../public/Spinner@1x-1.0s-200px-200px.svg"
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const ConfirmationRegistration = () => {
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.confirm);
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [confirmCode, setConfirmCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(confirmRegistration({ email, confirmCode }));
  };

  useEffect(() => {
    if (message && !loading) {
     navigate('/RegisterForm')
    }
  }, [message])

  return (
    <form style={{ margin: "70px auto" }} onSubmit={handleSubmit}>
      <div className="Registercon">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="Registercon">
        <label>код подтверждения:</label>
        <input
          type="text"
          value={confirmCode}
          onChange={(e) => setConfirmCode(e.target.value)}
        />
      </div>
      {/* <Button Button_type="submit" Button_text={"Ввести"}  Button_Style={"singin"}/> */}
      <button type="submit">Ввести</button>

      {/* {loading && (
        <div className="loading">
          <img src={img} alt="imgLoading" />
        </div>
      )} */}
      {error && <p>Error: {error}</p>}
    </form>
  );
};

export default ConfirmationRegistration;
