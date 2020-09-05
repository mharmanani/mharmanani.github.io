import React from 'react';

import './Footer.css'


const github = require('../assets/img/github-original.svg');
const linkedin = require('../assets/img/linkedin-original.svg');
const medium = require('../assets/img/medium-m-2.svg');
const mail = require('../assets/img/mail-icon-1.svg');

const Footer = () => {
    return (
        <footer>
            <div className='links'>
                <a href='https://github.com/mharmanani'>
                    <img 
                        src={github} 
                        alt='GitHub icon' 
                        
                    />
                </a>

                <a href='https://linkedin.com/in/mharmanani'>
                    <img 
                        src={linkedin} 
                        alt='LinkedIn icon' 
                    />
                </a>

                <a href='https://medium.com/@mharmanani'>
                    <img 
                        src={medium} 
                        alt='Medium icon' 
                    />
                </a>

                <a href='mailto:harmanani.mohamed@gmail.com'>
                    <img 
                        src={mail} 
                        alt='Mail icon' 
                    />
                </a>
                <div className='signature'>
                    &copy; Mohamed Harmanani <br/>
                    Built from scratch with 💙 and ☕ 
                </div>
            </div>
        </footer>
    );
}

export default Footer;