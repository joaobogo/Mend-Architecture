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
    box-shadow: 0 0 10px rgba(85,146,203,255);
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
    height: 110vh;
    justify-content: space-evenly;
    align-items: center;

    .title{
        flex-wrap: wrap;
        font-size: 28px;
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
      width: 95%;
      margin-left: 0;
    }
  }

  @media screen and (max-width: 385px) {
    height: 120vh;
   justify-content: space-evenly;

   img{
    width: 95%;
   }
  }

  @media screen and (max-width: 360px) {
    height: 140vh;
    img{
    width: 95%;
   }
  
  }

  @media screen and (max-width: 330px) {
    height: 160vh;
  
  }
`;

export default AboutContainer;
