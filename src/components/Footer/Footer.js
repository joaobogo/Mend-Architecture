import React from "react";
import FooterContainer from "./Footer.styles";
import logo from "../../assets/mendlogo.jpg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <FooterContainer>
      <div className="left">
        <img src={logo}></img>
      </div>

      <div className="right">
        <a href="https://www.instagram.com/mend.arquitetura/?igshid=MzRlODBiNWFlZA%3D%3D"><FaInstagram className="ig"/></a>
        <FaFacebook className="ig"></FaFacebook>
        <FaLinkedin className="ig"></FaLinkedin>
      </div>
      
    </FooterContainer>
  );
}

export default Footer;
