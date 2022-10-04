import React from "react";
import Picture from "../images/selfie.jpg";
import Hero from "../Hero";

import {
  Container,
  Navbar,
  Nav,
  Image,
  Figure,
  FigureImage,
  Button,
} from "react-bootstrap";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import AboutSection from "../AboutSection";
import Interests from "../Interests";


function Homepage(props) {
  const [toggleOpacity, setToggleOpacity] = useState(false);
  const [screenClicked, setScreenClicked] = useState(false);

  const location = useLocation();
  const title = location.state;
  // const explan = "I am someone who loves to code and create things with programming " + "</br>";
  // const {title} = (props.location && props.location.state) || {};
  // const title = location.state[0];
  // const hello = location.state[1];

  console.log(location.state, "ooo");

  function changeOpacity() {
    if (toggleOpacity) {
      document.getElementById("headerImage").style.opacity = 1;
      document.getElementById("headerImage").style.borderRadius = "50%";
      setToggleOpacity(false);
    } else {
      document.getElementById("headerImage").style.opacity = 0.1;
      setToggleOpacity(true);
    }
  }
  console.log(document.getElementById("headerImage"));

  const button = document.getElementById("buttonHeader");
  document.body.addEventListener("click", function (event) {
    if (event.target != button) {
      document.getElementById("hello").innerHTML = "";
      document.getElementById("headerImage").style.opacity = 1;
      document.getElementById("headerImage").style.borderRadius = "50%";
      setToggleOpacity(false);
    } else {
      document.getElementById("hello").innerHTML =
        "I am someone who loves to code and <br> create things with programming <br> I am someone who loves to code and <br> create things with programming ";
      document.getElementById("hello").style.cursor = "pointer";
      document.getElementById("headerImage").style.opacity = 0.1;
      setToggleOpacity(true);
    }
  });

  return (
    <div
      id="topText"
      class="container-fluid bg-dark text-light font-weight-bold p-5 text-center "
    >
      <div class="bg-dark p-5">
        <strong id="textName" class="display-7">
          Hi, my name is<br />
        </strong>
        
        <strong id="textName2" class="display-5">
          Jakob Ripley<br></br>
        </strong>
      </div>
      <div>
        <p
          id="hello"
          style={{
            overflowWrap: "break word",
            position: "absolute",
            textAlign: "center",
            cursor: "pointer",
            padding: "230px",
            left: "5%"
          }}
        ></p>
      </div>
      <div id="imageParent">
        <div id="headerImage" style={{ width: "100%" }}>
          <Button id="buttonHeader" variant="dark" onClick={changeOpacity}>
            {" "}
            more info >{" "}
          </Button>
          {toggleOpacity && <p id="overlayText"></p>}
          <Figure.Image
            id="imageStyle"
            width={800}
            height={600}
            alt="1000x1000"
            src={Picture}
          />
        </div>
        <div id="hero__social">
          <div id="hero__social__indicator">
            <p>Follow</p>
          </div>
          <div id="hero__social__text">
            <ul>
              <li>
                <a
                  href="http://facebook.com/webcifar"
                  target="_blank"
                  rel="noreferrer"
                >
                  FB
                </a>
              </li>
              <li>
                <a
                  href="http://twitter.com/webcifar"
                  target="_blank"
                  rel="noreferrer"
                >
                  TW
                </a>
              </li>
              <li>
                <a
                  href="http://isntagram.com/web_cifar"
                  target="_blank"
                  rel="noreferrer"
                >
                  IG
                </a>
              </li>
              <li>
                <a href="http://webcifar.com" target="_blank" rel="noreferrer">
                  LI
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="hero__scrollDown"></div>
      </div>
      <AboutSection />
      <Interests />
      {/* <ProjectSection /> */}
    </div>
  );
}

export default Homepage;
