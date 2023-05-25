import React from "react";
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Projects from '../components/Projects/Projects';
import WhatsappBtn from "../components/Whatsapp/Whatsapp";
import Contact from "../components/Contact/Contact";

function Home() {
  return (
    <div>
  <Header/>
  <Main/>
  <About/>
  <Projects/>
  <WhatsappBtn/>
<Contact/>
  <Footer/> 
    </div>
  );
}

export default Home;
