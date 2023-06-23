import styled from "styled-components";
import Navbar from "./Navbar";
import Contact from "./Contact";
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
const SingleContact = () => {
  return (
    <Container>
        <Navbar />
        <Contact />
    </Container>
  )
}

export default SingleContact