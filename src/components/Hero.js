import React from 'react';

import './Hero.css';

function Hero(props) {

    return(
        <div className='home-title'>
            <div className='hero'>
                <span className='first-name'> Mohamed </span> 
                Harmanani
            </div>

            <div className='subtitle'>
                <span role='img' id='ds-subtitle' aria-label='chart'>📊 Data Scientist </span> 
                <span role='img' id='se-subtitle' aria-label='laptop'> | 💻 Software Engineer </span>  
            </div>
        </div>
    );

}


export default Hero;