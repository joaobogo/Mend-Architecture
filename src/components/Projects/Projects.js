import React, {useEffect} from "react";
import ProjectContainer from "./Project.styles";
import pj1 from "../../assets/pj6.png";
import pj2 from "../../assets/pj12.png";
import pj3 from "../../assets/pj5.png";
import pj4 from "../../assets/pj4.png";
import "aos/dist/aos.css";
import Aos from "aos";
import Picture from "../Picture/Picture";

function Projects() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <ProjectContainer data-aos="fade-up">

      <div className="top" >
        <Picture src={pj1}></Picture>
        <Picture src={pj2}></Picture>
        <Picture src={pj3}></Picture>
        <Picture src={pj4}></Picture>
      </div>

      <div className="bottom">
        <a href="/projects">Quer ver mais? Clique aqui!</a>
      </div>
    </ProjectContainer>
  );
}

export default Projects;
