import React from 'react';
import "./Interest.css";

function Interests(props) {


        return(
            <div id="container">
            <div id="divider"></div>
            <div id="interestHeader1">My</div>
            <div id="interestHeader2">Interests</div>
            <div id="allInterestItems">
                <div>
                    <p id="title">Web Development</p>
                    <p>Lorem Ipsum is simply dummy text of the printing
                     and typesetting industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the 
                      1500s, when an unknown printer took a galley of 
                    </p>
                </div>
                <div>
                    <p id="title">Web Design</p>
                    <p>Lorem Ipsum is simply dummy text of the printing
                     and typesetting industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the 
                      1500s, when an unknown printer took a galley of 
                    </p>
                </div>
                <div>
                    <p id="title">Video Editing</p>
                    <p>Lorem Ipsum is simply dummy text of the printing
                     and typesetting industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the 
                      1500s, when an unknown printer took a galley of 
                    </p>
                </div>
            </div>
            </div>
        );
}

export default Interests;