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

const NavBox = styled.div`
position:sticky;
top:0;
`
const SingleContact = () => {
  return (
    <Container>
      <NavBox>
        <Navbar />
      </NavBox>
        <Contact />
    </Container>
  )
}

export default SingleContact