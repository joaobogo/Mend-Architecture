import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MendContainer from "./styles/Aboutmends";
import her from "../assets/her.png";

function Aboutmends() {
  return (
    <div>
      <Header />
      <MendContainer>
        <h1>Conheça mais sobre a MEND</h1>
        <div className="main">
          <div className="left">
            <img src={her}></img>
          </div>
          <div className="right">
            <p className="pmain">
              E para quem não me conhece, essa sou eu. Me chamo Maria Eduarda,
              estou no último ano da faculdade de arquitetura e urbanismo.
              Trabalho em uma construtora e em um escritório de design de
              interiores, agora dedico meu tempo a esse futuro escritório
              chamado MEND. Quem me conhece sabe que arquitetura é a minha
              verdadeira paixão! Posso afirmar com toda a certeza do mundo que
              estou na profissão certa, e amo o que faço! Já tive o prazer de
              fazer vários projetos para diversos clientes super queridos que
              confiaram em meu trabalho antes mesmo de eu receber meu diploma, à
              vocês meu muito obrigada pela confiança!
            </p>
          </div>
        </div>
      </MendContainer>
      <Footer />
    </div>
  );
}

export default Aboutmends;
