import styled from "styled-components";

const WhatsappBtnContainer = styled.div`
  .whatsappbtn {
    position: fixed;
    right: 15px;
    top: 75vh;
    z-index: 5;
  }

  .whatsappbtn img {
    width: 60px;
    transition: 0.4s;
    border-radius: 50%;
    border: solid #febc30 2px;
  }

  .whatsappbtn img:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 640px) {
    .whatsappbtn {
      position: fixed;
      right: 20px;
      top: 90vh;
      z-index: 5;
    }
  }
`;

export default WhatsappBtnContainer;
