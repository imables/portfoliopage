import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Render,
  NavLink,
  Switch,
  Navigate,
} from "react-router-dom";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import "./App.css";

import Footer from "./Footer";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/About";
import Contactpage from "./pages/Contact";

function App() {
  const [title, setTitle] = useState("jakoooob");
  const [hello, setHello] = useState("desc");

  console.log(title);

  return (
    <Router>
      <Container className="p-2" fluid={true}>
        <Navbar
          id="navMenu"
          bg="transparent, dark"
          variant="dark"
          bg="dark"
          expand="lg"
        >
          <Navbar.Toggle aria-controls="navbar-toggle" className="border-0" />
          <Navbar.Collapse className="p-5 " id="navbar-toggle">
            <Nav id="navLink" className="mr-auto text-center">
              <NavLink
                className="nav-link"
                to={{ pathname: "/" }}
                state={[title, hello]}
              >
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          {/* <Route exact path="/" element={<Navigate replace to="/home" />} /> */}
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<Aboutpage />} />
          <Route exact path="/contact" element={<Contactpage />} />
        </Routes>

       <Footer /> 
      </Container>
    </Router>
  );
}

export default App;
