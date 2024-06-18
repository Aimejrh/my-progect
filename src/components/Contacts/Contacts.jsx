import React from "react";

import "./Contacts.scss";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="Contacts">
      <h2 className="Contacts_h2">Наши контакты</h2>
      <div className="Contacts_number">
        <h3>+996 *** *** ***</h3>
        <h3>+996 *** *** ***</h3>
        <h3>+996 *** *** ***</h3>
        <h3>************.kg</h3>
      </div>
      <p className="Contacts_p">г.Бишкек, ул.********* 202 (пер.ул.********)</p>
      <div className="Contacts_Links">
        <ul>
          <li>
            <Link to={"/"}>
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <FaYoutube />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
