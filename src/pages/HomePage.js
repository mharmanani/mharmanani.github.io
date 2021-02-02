import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Hero from '../components/Hero';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import Portfolio from '../components/Portfolio';

import './HomePage.css'

const profile_pic = require('../assets/img/profile-pic.jpg');
const resume_icon = require('../assets/img/resume_icon.svg');

const paragraphs = [
    "Hey there, I'm Mohamed. I'm a young software engineer living in Toronto, currently wrapping up my studies in Computer Science and Philosophy at UofT.",
    "My current interests revolve around the areas of Data Science & Machine Learning, Robotics, and Bioinformatics.",
    "My hobbies include reading, gaming, photography, writing, and programming."
]

const HomePage = (props) => {
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Row>
                <Col>
                    <div id='about' className='section'>
                        <div className='section-title'> About me </div>
                        {paragraphs.map((parag) => <p> {parag} </p>)}
                        <span> 
                            <img src={resume_icon}
                                width={32}
                            />
                            <a href='https://mharmanani.github.io/files/resume.pdf'>See my resumé</a> 
                        </span>
                    </div>
                </Col>
                <Col className='image-col'> 
                    <img className='profile-pic' src={profile_pic} alt='Me' /> 
                </Col>
            </Row>

            <div id='skills' className='section'>
                <div className='section-title'> Technical skills </div>
                <Skills />
            </div>

            <div id='experience' className='section'>
                <div className='section-title'> Experience </div>
                <WorkExperience />
            </div>

            <div id='portfolio' className='section'>
                <div className='section-title'> My personal projects </div>
                <Portfolio />
            </div>

            <br/> <br/>
        
        </div>
    )
}

export default HomePage;