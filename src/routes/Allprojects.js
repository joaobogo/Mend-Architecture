import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AllProjectsContainer from "./styles/Allproject.styles";
import Picture from '../components/Picture/Picture'
import pj1 from "../assets/pj1.png";
import pj2 from "../assets/pj2.png";
import pj3 from "../assets/pj3.png";
import pj4 from "../assets/pj4.png";
import pj5 from "../assets/pj5.png";
import pj6 from "../assets/pj6.png";
import pj7 from "../assets/pj7.jpg";
import pj8 from "../assets/pj8.jpg";
import pj9 from "../assets/pj9.jpg";
import pj10 from "../assets/pj10.png";
import pj11 from "../assets/pj11.png";
import pj12 from "../assets/pj12.png";
import pj13 from "../assets/pj13.png";
import pj14 from "../assets/pj14.png";
import pj15 from "../assets/pj.png";

function Allprojects() {
  return (
    <div>
      <Header />
      <AllProjectsContainer>
        <h1>Nossos Projetos</h1>
        <div className="collection">
        <div className="card">
          <Picture src={pj1}></Picture>
          <p>Nome do Projeto</p>
        </div>
        <div className="card">
        <Picture src={pj2}></Picture>
          <p>Nome do Projeto</p>
        </div>
        <div className="card">
        <Picture src={pj3}></Picture>
          <p>Nome do Projeto</p>
        </div>
        <div className="card">
        <Picture src={pj4}></Picture>
          <p>Nome do Projeto</p>
        </div>
        <div className="card">
        <Picture src={pj5}></Picture>
          <p>Nome do Projeto</p>
        </div>
        <div className="card">
        <Picture src={pj6}></Picture>
          <p>Nome do Projeto</p>
        </div>
        <div className="card">
        <Picture src={pj7}></Picture>
          <p>Nome do Projeto</p>
        </div>
        <div className="card">
        <Picture src={pj8}></Picture>
          <p>Nome do Projeto</p>
        </div>
        <div className="card">
        <Picture src={pj9}></Picture>
          <p>Nome do Projeto</p>
        </div>
        <div className="card">
        <Picture src={pj10}></Picture>
          <p>Nome do Projeto</p>
        </div>
        <div className="card">
        <Picture src={pj11}></Picture>
          <p>Nome do Projeto</p>
        </div>
        <div className="card">
        <Picture src={pj12}></Picture>
          <p>Nome do Projeto</p>
        </div>
        <div className="card">
        <Picture src={pj13}></Picture>
          <p>Nome do Projeto</p>
        </div>
        <div className="card">
        <Picture src={pj14}></Picture>
          <p>Nome do Projeto</p>
        </div>
        <div className="card">
        <Picture src={pj15}></Picture>
          <p>Nome do Projeto</p>
        </div>
        </div>
      </AllProjectsContainer>
      <Footer />
    </div>
  );
}

export default Allprojects;
