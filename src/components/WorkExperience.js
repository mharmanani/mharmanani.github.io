import React from 'react';

import './WorkExperience.css';

const WorkExperience = () => {
    const workplaces = [
        { 
            name: 'University of Toronto', 
            role: 'Bioinformatics Research Intern',
            link: 'uoft-genet',
            logo: require('../assets/img/Utoronto_coa.svg.png'), 
            desc: 'Building tools and pipelines for analyzing biological sequence data in Python and Bash, from transcriptome assembly to sequence alignment and transcript annotation.', 
            colour: '#002a5c'
        },
        { 
            name: 'Venngage', 
            role: 'Software Engineer Intern',
            link: 'venngage',
            logo: require('../assets/img/vg-default.png'), 
            desc: 'My responsibilities focused on front-end development and optimizing high-impact user flows like various icon search features, and the proprietary slide manager for presentations. \
            I also developed layout generation algorithms for a new proof-of-concept application, increasing design complexity metrics by 20%.',
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
                                    <div className='workplace-desc'> {workplace.desc} </div>
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