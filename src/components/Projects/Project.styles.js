import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;

  .top {
    display: flex;
    justify-content: center;
  }
  
  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 30px;
    width: 100vw;
    font-weight: bold;
    height: 10vh;
    background: linear-gradient(
      90deg,
      rgba(102, 156, 205, 1) 0%,
      rgba(173, 214, 239, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    z-index: -99;
  }

  a {
    text-decoration: none;
    color: black;
  }

  
  @media screen and (max-width: 780px) {
    flex-direction: column;

    .top{
      flex-direction: column;
    }

    .bottom{
      font-size: 22px;
    }


  }

  @media screen and (max-width: 380px) {
  }

  @media screen and (max-width: 330px) {
  }
`;

export default ProjectContainer;
