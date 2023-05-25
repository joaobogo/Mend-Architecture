import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AllProjectsContainer from "./styles/Allproject.styles";
import Picture2 from "../components/Picture2/Picture2";
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
        <h1 className="title">Nossos Projetos</h1>

        <div className="collection">
          <div className="card">
            <Picture2 src={pj1}></Picture2>
            <p>Nome do Projeto</p>
          </div>
          <div className="card">
            <Picture2 src={pj2}></Picture2>
            <p>Nome do Projeto</p>
          </div>
          <div className="card">
            <Picture2 src={pj3}></Picture2>
            <p>Nome do Projeto</p>
          </div>
          <div className="card">
            <Picture2 src={pj4}></Picture2>
            <p>Nome do Projeto</p>
          </div>
          <div className="card">
            <Picture2 src={pj5}></Picture2>
            <p>Nome do Projeto</p>
          </div>
          <div className="card">
            <Picture2 src={pj6}></Picture2>
            <p>Nome do Projeto</p>
          </div>
          <div className="card">
            <Picture2 src={pj7}></Picture2>
            <p>Nome do Projeto</p>
          </div>
          <div className="card">
            <Picture2 src={pj8}></Picture2>
            <p>Nome do Projeto</p>
          </div>
          <div className="card">
            <Picture2 src={pj9}></Picture2>
            <p>Nome do Projeto</p>
          </div>
          <div className="card">
            <Picture2 src={pj10}></Picture2>
            <p>Nome do Projeto</p>
          </div>
          <div className="card">
            <Picture2 src={pj11}></Picture2>
            <p>Nome do Projeto</p>
          </div>
          <div className="card">
            <Picture2 src={pj12}></Picture2>
            <p>Nome do Projeto</p>
          </div>
          <div className="card">
            <Picture2 src={pj13}></Picture2>
            <p>Nome do Projeto</p>
          </div>
          <div className="card">
            <Picture2 src={pj14}></Picture2>
            <p>Nome do Projeto</p>
          </div>
          <div className="card">
            <Picture2 src={pj15}></Picture2>
            <p>Nome do Projeto</p>
          </div>
        </div>
      </AllProjectsContainer>
      <Footer />
    </div>
  );
}

export default Allprojects;
