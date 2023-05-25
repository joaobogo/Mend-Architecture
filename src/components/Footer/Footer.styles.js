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
  }
  @media screen and (max-width: 780px) {
  }

  @media screen and (max-width: 380px) {
  }
`;

export default FooterContainer;
