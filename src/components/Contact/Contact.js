import React, { useState, useEffect } from "react";
import ContactContainer from "./Contact.styles";
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  function handleChange(event) {
    const inputname = event.target.name;
    setContact({ ...contact, [inputname]: event.target.value });
  }

  function handleClick(event) {
    event.preventDefault();
    const from_name = contact.name;
    const message = contact.message;
    const subject = contact.subject;
    const reply_to = contact.email;

    const data = {
      service_id: "service_ujkdmj1",
      template_id: "template_0wnpiak",
      user_id: process.env.REACT_APP_USER_ID,
      template_params: { from_name, message, reply_to, subject },
    };

    axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
    setContact({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <ContactContainer id="contact">
      <p className="title" data-aos="fade-up">Fale Conosco</p>
      
      <p className="subtitle" data-aos="fade-up">Entre em contato para que possamos ajudar você</p>
      
      <div data-aos="fade-up" className="main">
        <div className="left">
          <div className="icons">
            <FaHome className="icones" /> <p>Ponta Grossa, PR</p>
          </div>
          <div className="icons">
            <FaPhone className="icones"/> <p>Telefone do Cliente</p>
          </div>
          <div className="icons">
            <FaMailBulk className="icones"/> <p>Email do Cliente</p>
          </div>
        </div>

        <div className="right">
          <form>
            <label>Nome:</label>
            <input
              onChange={handleChange}
              name="name"
              value={contact.name}
              type="text"
            ></input>
            <label>Email:</label>
            <input
              onChange={handleChange}
              name="email"
              value={contact.email}
              type="email"
            ></input>
            <label>Conteúdo:</label>
            <input
              onChange={handleChange}
              name="subject"
              value={contact.subject}
              type="text"
            ></input>
            <label>Mensagem:</label>
            <textarea
              onChange={handleChange}
              name="message"
              value={contact.message}
              rows="6"
              placeholder="Escreva sua mensagem aqui:"
            />
            <button onClick={handleClick} className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </ContactContainer>
  );
}

export default Contact;
