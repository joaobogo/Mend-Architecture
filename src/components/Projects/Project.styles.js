import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;

  .top {
    display: flex;
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
    background: rgb(191, 155, 48);
    background: linear-gradient(
      90deg,
      rgba(191, 155, 48, 1) 0%,
      rgba(255, 191, 0, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
  }

  a {
    text-decoration: none;
    color: black;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    width: 100vw;

    .top {
      flex-direction: column;
      align-items: center;
    }

    .bottom {
      font-size: 22px;
    }
  }

  @media screen and (max-width: 380px) {
  }

  @media screen and (max-width: 330px) {
  }
`;

export default ProjectContainer;
