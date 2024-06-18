import React from "react";
import Button from "../../Button/Button";
import {Link} from "react-router-dom"

const DiagnosticsIL = ({
  DiagnosticsIL_links,
  DiagnosticsIL_img,
  DiagnosticsIL_text,
  DiagnosticsIL_But_text,
}) => {
  return (
    <li>
      <Link to={`${DiagnosticsIL_links}`}>
        <img src={`${DiagnosticsIL_img}`} alt="img" />
        <p>{DiagnosticsIL_text}</p>
        <Button
          Button_Style={"Button_IL"}
          Button_text={`${DiagnosticsIL_But_text}`}
        />
      </Link>
    </li>
  );
};

export default DiagnosticsIL;
