import React from "react";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 200px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Img = styled.img`
padding-top: 200px;
padding-left: 100px;
width: 500px;
`

const Data = () => {
  return (
    <>
      <Img src = "./img/graph.jpeg" />
      <Desc>
        I have extensive experience also working on Data Applications
      </Desc>
    </>
  );
};

export default Data;