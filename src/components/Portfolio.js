import React from 'react';

import Badge from './Badge';

import './Portfolio.css';

const projects = [
    { 
        name: 'Implementing Visual Search with Vocabulary Trees', 
        first: 'Report',
        report: '/files/420/report.pdf',
        slides: '/files/420/pres.pdf',
        desc: 'An implementation of Nistér and Stewenius\' CVPR\'06 paper. The goal of this project was to build a content-based image retrieal system using feature extraction, homography estimation, and vocabulary trees.'
    },
    { 
        name: 'A pipeline for De Novo transcriptome assembly of P. trichocarpa buds', 
        logo: require('../assets/img/groupme_g_logo.png'), 
        desc: 'Created a pipeline for transcriptome assembly for short-read RNAseq data from samples of Western balsam-poplar (P. trichocarpa). The ultimate aim is to assess differences in transcript identity and gene expression between male and female buds.',
    },
    { 
        name: 'GroupMe.ca', 
        first: 'GitHub',
        github: 'https://github.com/groupme-ca',
        link: 'http://www.groupme.ca',
        logo: require('../assets/img/groupme_g_logo.png'), 
        desc: 'A social media application to match students with their peers based on common interests and courses taken. The goal of this project was to address students\' feelings of isolation in an increasingly virtual world, due to the COVID-19 pandemic.',
        colour: '#ff914e'
    },
    { 
        name: 'Job Market Analysis', 
        first: 'GitHub',
        github: 'https://github.com/mharmanani/job-market-analysis',
        medium: 'https://medium.com/@mharmanani/an-exploratory-analysis-of-the-data-science-job-market-in-2020-e909349dfc00',
        desc: 'A brief analysis of the 2020 job market for data science, data analysis and data engineering positions. Explores factors such as time, location, and salary.',
        colour: '#41bdff'
    },
    { 
        name: 'Shoe Pair Classifier', 
        first: 'GitHub',
        github: 'https://github.com/mharmanani/conv-shoe-classifier',
        link: 'https://nbviewer.jupyter.org/github/mharmanani/conv-shoe-classifier/blob/master/notebook/conv-shoe-classifier.ipynb',
        desc: 'A deep neural network model that determines if two shoes belong to the same pair - achieves a test accuracy of 80%.',
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
                                <h3 className='project-name'> {project.name} </h3>
                                <div className='project-desc'> {project.desc} </div>
                                <div className='project-links'> 
                                    {(project.github) 
                                        ? <span> <a style={{textDecoration: 'none'}} href={project.github}> 
                                            <Badge name='GitHub' type='github' first={project.first} /> </a>  </span>
                                        : ''
                                    } 
                                    {(project.link) 
                                        ? <span> <a style={{textDecoration: 'none'}} href={project.link}> 
                                            <Badge name='Link' type='link' first={project.first} /> </a>  </span>
                                        : ''
                                    }  
                                    {(project.medium) 
                                        ? <span> <a style={{textDecoration: 'none'}} href={project.medium}> 
                                            <Badge name='Medium' type='medium' first={project.first} /> </a>  </span>
                                        : ''
                                    } 
                                    {(project.report) 
                                        ? <span> <a style={{textDecoration: 'none'}} href={project.report}> 
                                            <Badge name='Report' type='pdf' first={project.first} /> </a>  </span>
                                        : ''
                                    }
                                    {(project.slides) 
                                        ? <span> <a style={{textDecoration: 'none'}} href={project.slides}> 
                                            <Badge name='Slides' type='slides' first={project.first} /> </a>  </span>
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