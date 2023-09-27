import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import {Link} from "react-router-dom";

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

@media only screen and (max-width: 768px) {
  height: 200vh;
}
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-left: 100px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const GithubButton = styled.button`
  background-color: green;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ResumeButton = styled.button`
  background-color: red;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const LinkedinButton = styled.button`
  background-color: blue;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  top: 40px;
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const ButtonSection = styled.div`
display: flex;
flex-direction: row;
`

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;


const Hero = () => {
  return (
    <Section>

    <Container>
      <Left>
        <Title>Programmer. Thinker. Builder.</Title>
        <WhatWeDo>
          <Line src="./img/line.png" />
          <Subtitle>What I Do</Subtitle>
        </WhatWeDo>
        <Desc>
          Build App's and Software that Changes the World
        </Desc>
        <ButtonSection>
        <Link to="https://github.com/CodeJunkie97" style={{ textDecoration: "none" }}>
        <GithubButton>Github</GithubButton>
        </Link>
        <Link to ="https://drive.google.com/file/d/1xVhAC8FEVtqyxSEVKzs1TxJCsEG-Hked/view">
        <ResumeButton>Resume</ResumeButton>
        </Link>
        <Link to="https://www.linkedin.com/in/ian-manners-469b84163" style={{ textDecoration: "none" }}>
        <LinkedinButton>LinkedIn</LinkedinButton>
        </Link>
        </ButtonSection>
      </Left>
      <Right>
        <Img src="./img/moon.png" />
      </Right>
    </Container>
  </Section>
  );
};

export default Hero;