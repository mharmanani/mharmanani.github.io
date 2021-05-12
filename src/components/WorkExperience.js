import React from 'react';

import './WorkExperience.css';

const WorkExperience = () => {
    const workplaces = [
        { 
            name: 'University of Toronto', 
            role: 'Machine Learning Research Intern',
            link: 'uoft-genet',
            dates: 'May 2021 - Present',
            logo: require('../assets/img/Utoronto_coa.svg.png'), 
            desc: ['Researching the implementation of Deep Learning models for understanding Computer Science students’ code, and provide feedback on bugs and code quality.'], 
            colour: '#002a5c'
        },
        { 
            name: 'University of Toronto', 
            role: 'Bioinformatics & Data Science Intern',
            link: 'uoft-genet',
            dates: 'Sep 2020 - Apr 2021',
            logo: require('../assets/img/Utoronto_coa.svg.png'), 
            desc: ['• Designed a pipeline for transcript assembly and biological sequence analysis using bash, Python',
                   '• Developed tools to clean, assemble, and align RNA transcripts, using FastQC, Trinity, Hisat2, and BLAST',
                   '• Wrote Python scripts to extract insights from over 6TB of transcript data, such as alignment frequency and average transcript length'],
            colour: '#002a5c'
        },
        { 
            name: 'Venngage', 
            role: 'Software Engineer Intern',
            link: 'venngage',
            dates: 'May 2019 - May 2020',
            logo: require('../assets/img/vg-default.png'), 
            desc: ['My responsibilities focused on front-end development and optimizing high-impact user flows like various icon search features, and the proprietary slide manager for presentations. \
            I also developed layout generation algorithms for a new proof-of-concept application, increasing design complexity metrics by 20%.'],
            colour: '#2d95ec'
        },
    ];

    return (
        <div className='workplaces'>
            {workplaces.map((workplace) => {
                return (
                    <div className='workplace-container'>
                        <div>
                            <span className='workplace-content'>
                                <div>
                                    <img 
                                        className='workplace-logo' 
                                        alt={workplace.name + ' logo'} 
                                        src={workplace.logo} 
                                        width={64} 
                                    />
                                </div>
                                <div>
                                    <h3 className='workplace-name'> {workplace.name} </h3>
                                    <p className='workplace-role'> {workplace.role} </p>
                                    <div className="workplace-dates"> {workplace.dates} </div>
                                    {workplace.desc.map((item) =>  
                                        <div className='workplace-desc'> {item} </div>)}
                                    
                                </div>
                            </span>
                        </div>
                    </div>
                );
            })}
           </div>
    );
}

export default WorkExperience;