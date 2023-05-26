import styled from "styled-components";

const ContactContainer = styled.div`
  border-top: 1px solid lightyellow;
  display: flex;
  flex-direction: column;

.title{
  font-size: 44px;
    color: #ffbf00;
    text-shadow: -4px 9px 7px rgba(191,155,48,0.43);
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
    color: #ffbf00;
  }

  .btn {
    margin-top: 5vh;
    text-align: center;
    text-decoration: none;
    color: black;
    border: solid #ffbf00 1px;
    border-radius: 20px;
    background-color: white;
    width: 15vw;
    height: 5vh;
    font-size: 16px;
    box-shadow: -4px 9px 7px rgba(191,155,48,0.43);
  }

  .btn:hover {
    cursor: pointer;
    box-shadow: -4px 9px 7px rgba(191,155,48,1);
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
    font-weight: bold;
  }

  input {
    height: 6vh;
    width: 35vw;
    border-radius: 10px;
    background-color: rgb(255, 255, 255, 0.3);
    border: solid 1px #ffbf00;
    box-shadow: -4px 9px 7px rgba(191,155,48,0.43);
  }

  textarea {
    width: 35vw;
    border-radius: 10px;
    background-color: rgb(255, 255, 255, 0.3);
    border: solid 1px #ffbf00;
    box-shadow: -4px 9px 7px rgba(191,155,48,0.43);;

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

  .main{
    flex-direction: column;
  }

  .left {
    margin-top: 0;
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 90vw;
  }

  .right {
    width: 90vw;
  }

  label{
    width: 100%;
  }

  input{
    width: 100%;
    height: 4vh;
  }

  textarea{
    width: 100%;
  }

  .btn{
    width: 40vw;
  }
  }

  @media screen and (max-width: 380px) {
  }

  @media screen and (max-width: 330px) {
  }
`;

export default ContactContainer;