import styled from "styled-components";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Works from "./components/Works";
import {
  HashRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import Home from "./pages/Home";
import Project from "./pages/Project";
import SingleContact from "./components/SingleContact";
import List from "./components/List/List"
import AboutMe from "./pages/AboutMe";

function App() {
    return (
        <HashRouter>
          <Routes>
            <Route exact path = "/" element = {<Home />} />
            <Route path = "/devprojects" element = {<List state={"dev"}/>} />
            <Route path = "/dataprojects" element = {<List state={"data"}/>} />
            <Route path = "/contact" element = {<SingleContact />} />
          </Routes>
        </HashRouter>
    )
  }
  
  export default App