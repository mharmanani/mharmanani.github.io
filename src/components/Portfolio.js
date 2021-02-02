import React from 'react';

import './Portfolio.css';

const projects = [
    { 
        name: 'GroupMe.ca', 
        github: 'https://github.com/groupme-ca',
        link: 'http://www.groupme.ca',
        logo: require('../assets/img/groupme_g_logo.png'), 
        desc: 'A social media application to match students with their peers based on common interests and courses taken',
        colour: '#ff914e'
    },
    { 
        name: 'Shoe Pair Classifier', 
        github: 'https://github.com/mharmanani/conv-shoe-classifier',
        link: 'https://nbviewer.jupyter.org/github/mharmanani/conv-shoe-classifier/blob/master/notebook/conv-shoe-classifier.ipynb',
        logo: require('../assets/img/shoe.svg'), 
        icon_author: 'Fengquan Li',
        icon_link: 'https://www.iconfinder.com/icons/5912565/footwear_group_human_people_shoe_shoes_woman_icon',
        desc: 'A deep neural network model that determines if two shoes belong to the same pair - achieves a test accuracy of 80%',
        colour: '#0542a0'
    },
    { 
        name: 'Job Market Analysis', 
        github: 'https://github.com/mharmanani/job-market-analysis',
        link: 'https://medium.com/@mharmanani/an-exploratory-analysis-of-the-data-science-job-market-in-2020-e909349dfc00',
        logo: require('../assets/img/job_seeker.svg'), 
        icon_author: 'inipagi',
        icon_link: 'https://www.iconfinder.com/icons/2620528/choose_employee_job_seeker_unemployee_work_icon',
        desc: 'A brief exploratory analysis of the current job market for data science, data analysis and data engineering positions',
        colour: '#41bdff'
    },
    { 
        name: 'Toxic Tweets Detector', 
        link: 'https://nbviewer.jupyter.org/github/mharmanani/toxic-tweets-clf/blob/master/notebook/twitter_sent_analysis.ipynb',
        github: 'https://github.com/mharmanani/toxic-tweets-clf',
        logo: require('../assets/img/twitter-tox.svg'), 
        desc: "Applied modern NLP techniques for sentiment analysis to a dataset of tweets to classify tweets containing hate speech, insults, or profanity.",
        colour: '#8a0a00'
    },
    { 
        name: 'Episode Recommender System', 
        github: 'https://github.com/mharmanani/ep-recommend',
        logo: require('../assets/img/tv.svg'), 
        icon_author: 'Creaticca Ltd',
        icon_link: 'https://www.iconfinder.com/icons/2250027/box_cable_mintie_screen_set_television_tv_icon',
        desc: "Scraped TV show data off of IMDb and built recommendation techniques based on episode rankings and similarity of descriptions",
        colour: '#ff4866'
    },
    { 
        name: '2D Pixel Survivor', 
        github: 'https://github.com/mharmanani/2d-survival',
        logo: require('../assets/img/zombie.svg'), 
        icon_author: 'Laura Reen',
        icon_link: 'https://www.iconfinder.com/icons/2291007/dead_face_halloween_smile_smiley_undead_zombie_icon',
        desc: 'An online zombie survival game with real-time multiplayer, built with React.js, Node.js, SQLite and WebSockets',
        colour: '#4bc18f'
    },
    { 
        name: 'Cosmic Jump', 
        link: 'https://mharmanani.github.io/cosmic-jump',
        github: 'https://github.com/mharmanani/cosmic-jump',
        logo: require('../assets/img/meteor.svg'), 
        icon_author: 'Chanut is Industries',
        icon_link: 'https://www.iconfinder.com/icons/3285298/asteroid_comet_fireball_meteor_meteorite_space_icon',
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
                                <div className='project-desc'> {project.desc} </div>
                                <div className='project-links'> 
                                    <a href={project.github} className='project-link'> GitHub </a>
                                    {(project.link) 
                                        ? <span> | <a href={project.link} className='project-link'> Link </a>  </span>
                                        : ''
                                    } 
                                    {(project.icon_link && project.icon_author) 
                                        ? <span> | 
                                            <span> Icon by 
                                                <a href={project.icon_link}> {project.icon_author}  </a> 
                                                </span>
                                        </span>
                                        : ''
                                    } 
                                </div>
                            </div>
                            <br/>
                        </span>
                    </div>
                );
            })}
           </div>
    );
} 

export default Portfolio;