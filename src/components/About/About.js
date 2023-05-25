import React,{useEffect} from "react";
import AboutContainer from "./About.styles";
import her from "../../assets/her.png";
import "aos/dist/aos.css";
import Aos from "aos";

function About() {


  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <AboutContainer>
      <div className="left">
        <img src={her}></img>
      </div>

      <div className="right">
        <p className="title">MEND por Eduarda Novaes</p>
        <p className="pmain" data-aos="fade-up">E para quem não me conhece, essa sou eu. Me chamo Maria Eduarda, estou no último ano da faculdade de arquitetura e urbanismo. Trabalho em uma construtora e em um escritório de design de interiores, agora dedico meu tempo a esse futuro escritório chamado MEND.
            Quem me conhece sabe que arquitetura é a minha verdadeira paixão! Posso afirmar com toda a certeza do mundo que estou na profissão certa, e amo o que faço!
            Já tive o prazer de fazer vários projetos para diversos clientes super queridos que confiaram em meu trabalho antes mesmo de eu receber meu diploma, à vocês meu muito obrigada pela confiança!
        </p>
      </div>
    </AboutContainer>
  );
}

export default About;
