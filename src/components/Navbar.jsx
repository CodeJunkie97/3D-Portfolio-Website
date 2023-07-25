import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

const Section = styled.div`
  display: flex;
  justify-content: center;
  

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


const Navbar = ({handleClick}) => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <Link to="/" style={{ textDecoration: "none" }}>
            <ListItem>Home</ListItem>
            </Link>
            <Link to="/devprojects"  style={{ textDecoration: "none" }}>
            <ListItem onClick={()=>{handleClick("dev")}}>Software Development Projects</ListItem>
            </Link>
            <Link to = "/dataprojects" style={{ textDecoration: "none" }}>
            <ListItem onClick={()=>{handleClick("data")}}>Data Science Projects</ListItem>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
            <ListItem>Contact</ListItem>
            </Link>
          </List>
        </Links>
        <Icons>
          
         {/* <Icon src="./img/search.png" /> */}
         <Link to="/contact" style = {{ textDecoration: "none"}}>
          <Button>Hire Now</Button>
          </Link>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;