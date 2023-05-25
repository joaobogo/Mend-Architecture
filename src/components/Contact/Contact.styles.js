import styled from "styled-components";

const ContactContainer = styled.div`
  border-top: 1px solid lightyellow;
  display: flex;
  flex-direction: column;

.title{
    font-family: "Roboto";
    font-size: 40px;
    font-weight: bold;
    color: rgba(85,146,203,255);
    text-align: center;
}

.subtitle{
    font-weight: bold;
    text-align: center;
    margin-top: 0;
    font-size: 24px;
}
  .main {
    display: flex;
    width: 80vw;
    margin-left: 10vw;
    margin-right: 10vw;
  }
  .icons {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .icones{
    color: rgba(85,146,203,255);
  }

  .btn {
    margin-top: 5vh;
    text-align: center;
    text-decoration: none;
    color: black;
    border: solid rgba(85,146,203,255) 2px;
    border-radius: 20px;
    background-color: white;
    width: 15vw;
    height: 5vh;
    font-size: 16px;
  }

  .btn:hover {
    cursor: pointer;
    box-shadow: 0 0 80px rgba(85,146,203,255);
  }
  .left {
    margin-top: -20vh;
    margin-left: 20vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 40vw;
  }

  .right {
    width: 40vw;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: center;
  }

  label {
    font-size: 16px;
    text-align: left;
    width: 35vw;
  }

  input {
    height: 6vh;
    width: 35vw;
    border-radius: 10px;
    background-color: rgb(255, 255, 255, 0.3);
    border: solid 1px rgba(85,146,203,255);
  }

  textarea {
    width: 35vw;
    border-radius: 10px;
    background-color: rgb(255, 255, 255, 0.3);
    border: solid 1px rgba(85,146,203,255);
    padding: 5px;
  }

  h2 {
    margin-top: 5vh;
    font-size: 40px;
    font-family: "Times New Roman", Times, serif;
    text-align: center;
  }

  .main {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }



  @media screen and (max-width: 780px) {
   }
`;

export default ContactContainer;