import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__nav">
        <p className="footer__linkCol">
          <p className="footer__title">Get to Know Us</p>

          <Link>
            <p className="footer__link">Careers</p>
            <p className="footer__link">Blog</p>
            <p className="footer__link">About Amazon</p>
            <p className="footer__link">Amazon Devices</p>
            <p className="footer__link">Amazon Tours</p>
          </Link>
        </p>
        <p className="footer__linkCol">
          <p className="footer__title">Make Money with Us</p>
          <Link>
            <p className="footer__link">Sell products on Amazon</p>
            <p className="footer__link">Sell apps on Amazon</p>
          </Link>
        </p>
        <p className="footer__linkCol">
          <p className="footer__title">Amazon Payment Products</p>
          <Link>
            <p className="footer__link">Amazon Business Card</p>
            <p className="footer__link">Shop with Points</p>
          </Link>
        </p>
        <p className="footer__linkCol">
          <p className="footer__title">Product of the author</p>
          <Link>
            <p className="footer__link">Amazon Web-app</p>
            <p className="footer__link">Amazon Movie app</p>
            <p className="footer__link">Amazon Management app</p>
          </Link>
        </p>
      </div>

      <div className="footer__author">
        <p className="footer__link">
          <p>
            &copy; 2020 - <strong>HUYNH QUANG TRUONG</strong>
          </p>
          <p className="footer__email">truonghq97@gmail.com</p>
        </p>
      </div>
    </div>
  );
}

export default Footer;
