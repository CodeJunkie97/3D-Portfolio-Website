import styled from "styled-components";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Works from "./components/Works";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import Home from "./pages/Home";
import Project from "./pages/Project";
import SingleContact from "./components/SingleContact";

function App() {
    return (
        <Router>
          <Routes>
            <Route exact path = "/" element = {<Home />} />
            <Route path = "/devprojects" element = {<Project type="dev"/>} />
            <Route path = "/dataprojects" element = {<Project type="data"/>} />
            <Route path = "/contact" element = {<SingleContact />} />
          </Routes>
        </Router>
    )
  }
  
  export default App