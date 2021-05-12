import React from 'react';

import pdf from '../assets/img/pdf.svg';
import gh from '../assets/img/github-original.svg';
import link from '../assets/img/worldwide.svg';
import slides from '../assets/img/slides.svg';
import medium from '../assets/img/medium.svg';

import './Badge.css';

const Badge = (props) => {

    const var2icon = {'pdf': pdf, 'github': gh, 'link': link, 'slides': slides, 'medium': medium};

    return (
        <div className='badge-outer' style={{
            margin: `${props.name === props.first ? '0' : '0 .5em' }`
        }}>
            <div className='badge-icon'> 
                <img src={var2icon[props.type]} width="16" height="16"/> 
            </div>
            <div className='badge-txt'> {props.name} </div>
        </div>
    );

}

export default Badge;