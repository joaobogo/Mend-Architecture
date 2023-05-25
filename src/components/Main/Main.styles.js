import styled from "styled-components";

const MainContainer = styled.div`
  background: url(${(props) => props.bgimage}) no-repeat;
  height: 82vh;
  background-size: 100vw;

  @media screen and (max-width: 780px) {
    background-size: cover;
    background: url(${(props) => props.mbimage}) no-repeat;
  }

  @media screen and (max-width: 380px) {
  }
`;

export default MainContainer;
