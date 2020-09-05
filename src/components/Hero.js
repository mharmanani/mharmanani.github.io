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
                <span role='img' aria-label='chart'>📊</span> Data Scientist | 
                <span role='img' aria-label='laptop'> 💻 </span>  Software Engineer 
            </div>
        </div>
    );

}


export default Hero;