import styled from "styled-components";

const PictureContainer2 = styled.div`
  margin: 0;
  padding: 0;
  border: none;
  width: 25vw;
  height: 50vh;

  body.active-pic {
    overflow-y: hidden;
  }

  .picture {
    width: 25vw;
    height: 50vh;
  }

  .dnone {
    display: none;
  }

  button {
    border: none;
    background: transparent;
  }

  button:hover {
    cursor: pointer;
  }

  .active .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 900;
  }

  .overlay {
    background: rgba(49, 49, 49, 0.8);
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 0;
    width: 50vw;
    height: 80vh;
    border-radius: 20px;
  }

  .picturebig {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  .closebutton {
    position: absolute;
    top: 15px;
    right: 20px;
    padding: 5px 7px;
    color: white;
    font-weight: bold;
    font-size: 24px;
  }

  @media screen and (max-width: 780px) {
    width: 100vw;

    .picture{
      width: 95vw;
    }

    .content{
      width: 95%;
      height: 55vh;
    }
  }

  @media screen and (max-width: 380px) {
  }

  @media screen and (max-width: 330px) {
  }
`;

export default PictureContainer2;
