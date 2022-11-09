import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faMedium,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className={"footer"}>
      <div className="singleCol social-media-icon a">
        <a href="https://facebook.com" role={"button"} />
        <FontAwesomeIcon icon={faFacebook} />
        <a href="https://instagram.com" role={"button"} />
        <FontAwesomeIcon icon={faInstagram} />
        <a href="https://twitter.com" role={"button"} />
        <FontAwesomeIcon icon={faTwitter} />
        <a href="https://medium.com" role={"button"} />
        <FontAwesomeIcon icon={faMedium} />
        <a href="https://medium.com" role={"button"} />
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
      <h4 style={{ marginTop: "10px" }}>@2022 Copyright fitscript.com</h4>
    </div>
  );
}
export default Footer;
