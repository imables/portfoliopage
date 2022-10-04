import React, { useState } from 'react';

function Hero(props) {
    console.log(props.title);
    return (
        <div class="container-fluid bg-dark text-light p-5">
            <div class="container bg-dark p-5">
                <p>{props.title && <h1>{props.title}</h1>}</p>
                <div>console.log(props.title)</div>
                </div>
    </div>
    
    );
    
}

export default Hero;