import React from 'react';

import './WorkExperience.css';

const WorkExperience = () => {
    const workplaces = [
        { 
            name: 'University of Toronto', 
            role: 'Bioinformatics Research Analyst',
            link: 'uoft-genet',
            logo: require('../assets/img/Utoronto_coa.svg.png'), 
            desc: 'Analyzing genomic data to determine epigenetic factors in plant stress response and sex determination.', 
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
                    <a className='workplace-link' href={'/' + workplace.link}>
                        <div className='workplace-container'>
                            <div style={{ borderLeft: `3px solid ${workplace.colour}`, paddingLeft: '1rem'}}>
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
                    </a>
                );
            })}
           </div>
    );
}

export default WorkExperience;