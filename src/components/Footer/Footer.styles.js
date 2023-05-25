import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 18vh;

  img {
    width: 180px;
    padding-left: 5vw;
  }

  .right {
    display: flex;
    justify-content: space-evenly;
    width: 15%;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    cursor: pointer;
  }

  .ig:hover {
    cursor: pointer;
    color:rgba(85,146,203,255)
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    align-items: center;

    img{
      padding-left: 0;
    }

    .right{
      width: 30%;
      padding-bottom: 5px;
    }
  }

  @media screen and (max-width: 380px) {
  }
`;

export default FooterContainer;
