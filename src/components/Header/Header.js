import React from "react";
import HeaderContainer from "./Header.styles";
import logo from "../../assets/mendlogo.jpg";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

function Header() {
  return (
    <HeaderContainer>
      <div className="left">
        <a href="/"><img src={logo}></img></a>
      </div>

      <div className="right">
        <a href="/about">Sobre Nós</a>
        <a href="/projects">Projetos</a>
        <a>
        <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contatos
          </Link>
        </a>
        <a className="ig" href="https://www.instagram.com/mend.arquitetura/?igshid=MzRlODBiNWFlZA%3D%3D"><FaInstagram className="ig"/></a>
      </div>
    </HeaderContainer>
  );
}

export default Header;
