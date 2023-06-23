import styled from "styled-components";
import Hero from "../components/Hero";
import Works from "../components/Works";
import Contact from "../components/Contact";


const Home = () => {
    const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    color: white;
    background: url("./img/bg.jpeg");
    &::-webkit-scrollbar{
      display: none;
    }
  `;
  return (
    <div>
        <Container>
            <Hero />
            <Works />
            <Contact />
        </Container>
    </div>
  )
}

export default Home;