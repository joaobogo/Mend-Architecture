import styled from "styled-components";

const AllProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;


 
    .title{
    text-align: center;
    font-family: 'Dancing Script';
    font-size: 44px;

  }
  .collection {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30vw;
    height: 60vh;
    border-radius: 20px;
  }

  img {
    height: 80%;
    border-radius: 20px;
  }

  p {
    text-align: center;
  }


  @media screen and (max-width: 780px) {
    flex-direction: column;

    .collection{
      flex-direction: column;
      align-items: center;
    }

    .card{
      width: 95vw;
      height: 65vh;
      
      
    }

  p{
    font-size: 26px;
  }
  }

  @media screen and (max-width: 380px) {
  }
`;

export default AllProjectsContainer;
