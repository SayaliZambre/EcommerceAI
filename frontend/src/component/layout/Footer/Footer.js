import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>asdfghjk</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>sdfghjkl xcvbnm sdfghjk xcvbnm</p>

        <p>Copyrights 2024 &copy;sdfghj</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/___sayliiii___/">Instagram</a>
        <a href="https://www.linkedin.com/in/zambre-sayali-a21690242/">Linkedin</a>
        <a href="#">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
