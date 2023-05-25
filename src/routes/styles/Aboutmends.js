import styled from "styled-components";

const MendContainer = styled.div`
display: flex;
flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;


h1{
    text-align: center;
    font-family: 'Dancing Script';
}

.main{
    display: flex;
}
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


  .pmain {
    text-align: justify;
    padding-right: 15vw;
  }

 
  @media screen and (max-width: 780px) {
  }

  @media screen and (max-width: 380px) {
  }
`;

export default MendContainer;
