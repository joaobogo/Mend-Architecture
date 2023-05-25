import styled from "styled-components";

const HeaderContainer = styled.header`
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
    width: 40%;
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
    flex-direction: column;
    height: 15vh;
    justify-content: center;
    align-items: center;

    img {
      width: 200px;
    }

    .right {
      width: 100%;
    }

    .ig {
      display: none;
    }
  }

  @media screen and (max-width: 380px) {
    height: 22vh;
  }
`;

export default HeaderContainer;
