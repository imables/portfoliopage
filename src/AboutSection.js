import React from 'react';
import Picture from "./images/selfie.jpg";
import "./About.css";
import { useNavigate } from 'react-router-dom'

import {
    Button,
  } from "react-bootstrap";



function AboutSection() {
    const navigate = useNavigate();
    return (
//         <div id="aboutSec">
//             <div id="aboutSecLeft">
//             <h2>Let me introduce myself</h2>
//                 <div id="aboutPara">
//                     <p>I am a freelance website designer and developer from Chittagong,
//                     Bangladesh. I create professional websites. I love art and always
//                     try to show unique views to the audience through my design.</p>
//                 </div>
//                 <div className="aboutSection__buttons">
//                 <br />
//                 <Button id="aboutSecButton" variant="primary" size="lg" active onClick={() => navigate('/about')}>
//     Primary button
//   </Button>{' '}
//                 <div>
//                 <img id="aboutSecRight" src={Picture} alt="Img" />
//                 </div>
//                 </div>
//             </div>
//         </div>
<div className="container">
        <div className="aboutSection__left">
        <h2>Let me introduce myself</h2>
          <p className="para">
            I am a freelance website designer and developer from Chittagong,
            Bangladesh. I create professional websites. I love art and always
            try to show unique views to the audience through my design.
          </p>
          <div className="aboutSection__buttons">
          <Button className="aboutSecButton" variant="primary" size="lg" active onClick={() => navigate('/about')}>
          Learn More
            </Button>{' '}
            <Button className="aboutSecButton" variant="primary" size="lg" active onClick={() => navigate('/contact')}>
          My Works
            </Button>{' '}
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={Picture} alt="Img" />
          <img className="aboutImg2" src={Picture} alt="Img" />
        </div>
      </div>
    );
}

export default AboutSection;