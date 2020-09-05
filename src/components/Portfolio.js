import React from 'react';

import './Portfolio.css';

const projects = [
    { 
        name: 'Shoe Pair Classifier', 
        type: 'Convolutional Neural Networks',
        github: 'https://github.com/mharmanani/conv-shoe-classifier',
        link: 'https://nbviewer.jupyter.org/github/mharmanani/conv-shoe-classifier/blob/master/notebook/conv-shoe-classifier.ipynb',
        logo: require('../assets/img/shoe.svg'), 
        desc: 'A deep neural network model that determines if two shoes belong to the same pair - achieves a test accuracy of 80%',
        colour: '#0542a0'
    },
    { 
        name: 'Job Market Analysis', 
        type: 'Exploratory Data Analysis',
        github: 'https://github.com/mharmanani/job-market-analysis',
        link: 'https://medium.com/@mharmanani/an-exploratory-analysis-of-the-data-science-job-market-in-2020-e909349dfc00',
        logo: require('../assets/img/job_seeker.svg'), 
        desc: 'A brief exploratory analysis of the current job market for data science, data analysis and data engineering positions',
        colour: '#41bdff'
    },
    { 
        name: 'Toxic Tweets Detector', 
        type: 'Sentiment Analysis',
        link: 'https://nbviewer.jupyter.org/github/mharmanani/toxic-tweets-clf/blob/master/notebook/twitter_sent_analysis.ipynb',
        github: 'https://github.com/mharmanani/toxic-tweets-clf',
        logo: require('../assets/img/twitter-tox.svg'), 
        desc: "Applied modern NLP techniques for sentiment analysis to a dataset of tweets to classify tweets containing hate speech, insults, or profanity.",
        colour: '#8a0a00'
    },
    { 
        name: 'Episode Recommender System', 
        type: 'Recommender System',
        github: 'https://github.com/mharmanani/ep-recommend',
        logo: require('../assets/img/tv.svg'), 
        desc: "Scraped TV show data off of IMDb and built recommendation techniques based on episode rankings and similarity of descriptions",
        colour: '#ff4866'
    },
    { 
        name: '2D Pixel Survivor', 
        type: 'Online Multiplayer Game',
        github: 'https://github.com/mharmanani/2d-survival',
        logo: require('../assets/img/zombie.svg'), 
        desc: 'An online zombie survival game with real-time multiplayer, built with React.js, Node.js, SQLite and WebSockets',
        colour: '#4bc18f'
    },
    { 
        name: 'Cosmic Jump', 
        type: 'Online Game',
        link: 'https://mharmanani.github.io/cosmic-jump',
        github: 'https://github.com/mharmanani/cosmic-jump',
        logo: require('../assets/img/meteor.svg'), 
        desc: 'A modest flappy bird-like web application built with JavaScript and Phaser.js',
        colour: '#ff7143'
    },
]

const Portfolio = () => {
    return (
        <div className='projects'>
            {projects.map((project) => {
                return (
                    <div className='project-container'>
                        <div style={{ borderLeft: `3px solid ${project.colour}`, paddingLeft: '1rem'}}>
                            <span className='project-content'>
                                <div>
                                    <img 
                                        className='project-logo' 
                                        alt={project.name + ' logo'} 
                                        src={project.logo} 
                                        width={64} 
                                    />
                                </div>
                                <div>
                                    <h3 className='project-name'> {project.name} </h3>
                                    <p className='project-type'> {project.type} </p>
                                    <div className='project-desc'> {project.desc} </div>
                                    <div> 
                                    <a href={project.github} className='project-link'> GitHub </a>
                                    {(project.link) 
                                        ? <span> | <a href={project.link} className='project-link'> Link </a>  </span>
                                        : ''
                                    }
                                </div>
                                </div>
                                <br/>
                            </span>
                        </div>
                    </div>
                );
            })}
           </div>
    );
} 

export default Portfolio;