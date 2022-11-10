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
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={"footer"}>
      <div className="singleCol social-media-icon a">
        <Link to={"/#"}>
          {" "}
          <FontAwesomeIcon icon={faFacebook} />
        </Link>

        <Link to={"/#"}>
          <FontAwesomeIcon icon={faInstagram} />
        </Link>

        <Link to={"/#"}>
          <FontAwesomeIcon icon={faTwitter} />
        </Link>

        <Link to={"/#"}>
          <FontAwesomeIcon icon={faMedium} />
        </Link>

        <Link to={"/#"}>
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </div>

      <div class="footer_divider">
        <span class="copyright">
          &copy; 2022 fitscript.com. All rights reserved.
        </span>
      </div>
    </div>
  );
}
export default Footer;
