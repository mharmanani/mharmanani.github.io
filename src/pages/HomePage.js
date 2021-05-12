import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Hero from '../components/Hero';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import Portfolio from '../components/Portfolio';

import './HomePage.css'

const profile_pic = require('../assets/img/profile-pic.jpg');
const linkedin = require('../assets/img/linkedin.svg');
const github = require('../assets/img/github-original.svg');
const medium = require('../assets/img/medium.svg');

const paragraphs = [
    "Hey there, I'm Mohamed. I'm an aspiring Data Scientist from Toronto, currently wrapping up my studies in Computer Science and Philosophy at the University of Toronto.",
    "My current academic interests include machine learning, data science, NLP and bioinformatics.",
    "I'm currently doing a Research Internship at the UofT CS Department, where I'm working on deep learning models for automatic bug detection in student code. I also have prior experience in web development and data science.",
    <> My resumé is available <a href='/files/resume.pdf'> here</a>. </>
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
                        <span className='icons-blurb'> 
                            <a href="https://www.linkedin.com/in/mharmanani"> 
                                <img src={linkedin} width={18}/> </a>
                            <a href="https://www.github.com/mharmanani"> 
                                <img src={github} width={18}/> </a>
                            <a href="https://www.medium.com/mharmanani"> 
                                <img src={medium} width={18}/> </a>
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
                <div className='section-title'> Featured Projects </div>
                <Portfolio />
            </div>

            <br/> <br/>
        
        </div>
    )
}

export default HomePage;