import Navbar from "../components/Navbar";
import styled from "styled-components";

const AboutMe = () => {
const Section = styled.div`
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

const OuterContainer = styled.div`
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
  font-size: 64px;
  padding-top: 50px;
  padding-left: 150px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Subtitle = styled.h3`
  font-size: 20px;
  padding-left:  150px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Text = styled.p`
 font-size: 12px;
 
 padding-left: 100px;
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
const Img = styled.img`
  width: 400px;
  height: 300px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 100;
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
const Navbox = styled.div`
background: url("./img/bg.jpeg");
`;
  return (
    <div>
        <Navbox>
        <Navbar />
        </Navbox>
        <OuterContainer>
        <Section>
            <Container>
                <Left>
                    <Title>
                        about me
                    </Title>
                    <Subtitle>
                        Full Stack Developer with an interest in machine learning and big data applications.
                    </Subtitle>
                    <Text>
                    My interest in computers and technology stemmed from my childhood obsession of needing to know how everything works. While most kids enjoyed playing with their toys, I disassembled mine so I could understand them. This obsession inevitably led me to computers. Just using a computer wasn’t enough for me. I had to build my own. After coming to the realization that a computer is a little more complicated than ten-year-old me thought, I got to work researching everything I could, which ultimately led to receiving a Bachelor’s of Science in Computer Science from the University of Pittsburgh.

<br></br>
Like many engineers, I have a desire to learn and improve the world through technology. I love finding creative ways to solve problems with no clear solution. I am meticulous in everything I do whether it is programming, design, or something else. My ability to quickly learn new skills has allowed me to solve complex problems even when the technologies used are new to me, which has led to a wide range of experience with many different programming languages.

<br></br>
In my first professional role, I worked as an engineer at Atos where I got the opportunity to contract with The Andover Companies and work as one of the main full stack developers tasked with completing there newly proposed Customer Information, Billing, and Payments Portal V2. I have had the opportunity to learn so much in this role so far. For one, I had never had any experience with cloud before, and I saw it as a challenge to get my AWS Certifications so I can be one of the go to guys when it comes to cloud infrastructure. Although I had worked with Javascript in college, learning React and component based front-end development changed my perspective to make me more passionate about the front end side of software development. I also worked with Java and Databases in college but building REST API's to back those databases was something that was both new and fascinating to me. And even with all of that, the most important thing I learned from this role is that quality matters.

<br></br>
Quality matters. It is one thing to be able to write working code, but to write working code that follows best practices, is user friendly, has no unnecessary complexity, and is designed with future improvements in mind is something completely different. Attention to detail is the difference between code that lasts a lifetime and code that is completely rewritten the next time a change is required. I would rather write code that lasts a lifetime!
                    </Text>
                </Left>
                <Right>
                    <Img src="https://media.licdn.com/dms/image/D5603AQEzH4HqNQ9bFA/profile-displayphoto-shrink_800_800/0/1678805395682?e=2147483647&v=beta&t=Ph6F_HxZd8zETxlFarpM--kqfPKX34pBOjBGyaamlyY"></Img>
                </Right>
            </Container>
        </Section>
        </OuterContainer>
    </div>
  )
}

export default AboutMe