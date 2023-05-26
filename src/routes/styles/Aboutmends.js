import styled from "styled-components";

const MendContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

  .title {
    text-align: center;
    font-family: "Dancing Script";
    font-size: 44px;
    color: #ffbf00;
    text-shadow: -4px 9px 7px rgba(191,155,48,0.43);
  }

  .main {
    display: flex;
  }
  .left {
    width: 40vw;
  }

  img {
    width: 200px;
    border-radius: 20px;
    margin-left: 10vw;
    box-shadow: 0 0 10px rgba(191,155,48,1);
  }

  .right {
    width: 60vw;
  }

  .pmain {
    text-align: justify;
    padding-right: 15vw;
  }

  @media screen and (max-width: 780px) {
    height: auto;

    .main {
      flex-direction: column;
      align-items: center;
    }

    img{
      width: 300px;
      margin-left: 0;
    }

    .left{
      width: 100vw;
      display: flex;
      justify-content: center;
    }

    .right{
      width: 100vw;
    }

    .pmain{
      padding: 5vw;
    }
  }

  @media screen and (max-width: 385px) {
  }

  @media screen and (max-width: 360px) {

    img{
      width: 280px;
    }
  }
`;

export default MendContainer;
