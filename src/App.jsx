import styled from "styled-components";
import Navbar from "./components/Navbar,";

function App() {
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
        <Navbar />
        </Container>
      </div>
    )
  }
  
  export default App