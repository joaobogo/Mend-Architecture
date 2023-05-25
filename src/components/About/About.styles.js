import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  .left {
    width: 40vw;
  }

  img {
    width: 200px;
    border-radius: 20px;
    margin-left: 10vw;
  }

  .right {
    width: 60vw;
  }

  .title {
    font-family: 'Dancing Script';
    font-size: 40px;
    margin: 0;
    font-weight: bold;
    color: rgba(85, 146, 203, 255);
  }

  .pmain {
    text-align: justify;
    padding-right: 15vw;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    height: 120vh;
    justify-content: center;
    align-items: center;

    .title{
        flex-wrap: wrap;
        font-size: 26px;
        text-align: center;
    }
    .left {
      width: 80vw;
      display: flex;
      justify-content: center;
    }

    .pmain{
        padding-right: 0;
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width:80vw;
    }

    img {
      width: 80%;
      margin-left: 0;
    }
  }

  @media screen and (max-width: 380px) {
  }
`;

export default AboutContainer;
