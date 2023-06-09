import styled from "styled-components";

const MainContainer = styled.div`
  background: url(${(props) => props.bgimage}) no-repeat;
  height: 82vh;
  background-size: 100vw;

  @media screen and (max-width: 780px) {
    background-size:contain   ;
    background: url(${(props) => props.mbimage}) no-repeat;
    height: 80vh;
  }

  @media screen and (max-width: 385px) {
    height: 90vh;
  }

  @media screen and (max-width: 360px) {
    height: 110vh;
  }
`;

export default MainContainer;
