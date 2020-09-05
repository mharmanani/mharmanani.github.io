import React from 'react';

import './Skills.css';

const Skills = () => {

    const skills = [
        { name: 'Python', src: require('../assets/img/python-3.svg'), width: 64},
        { name: 'scikit-learn', src: require('../assets/img/sk-logo.png'), width: 128 },
        { name: 'PyTorch', src: require('../assets/img/pytorch.svg'), width: 160 },
        { name: 'Flask', src: require('../assets/img/flask.svg'), width: 64},
        { name: 'NLTK', src: require('../assets/img/nltk-logo.svg'), width: 128},
        { name: 'pandas', src: require('../assets/img/Pandas_logo.svg'), width: 128},
        { name: 'matplotlib', src: require('../assets/img/matplotlib.svg'), width: 128},
        { name: 'JavaScript', src: require('../assets/img/javascript.svg'), width: 64},
        { name: 'TypeScript', src: require('../assets/img/typescript.svg'), width: 64},
        { name: 'React', src: require('../assets/img/react.svg'), width: 72},
        { name: 'node.js', src: require('../assets/img/nodejs.svg'), width: 64},
        { name: 'PHP', src: require('../assets/img/php-1.svg'), width: 72},
        { name: 'Java', src: require('../assets/img/java.svg'), width: 48},
        { name: 'pgSQL', src: require('../assets/img/postgresql.svg'), width: 72},
        { name: 'Docker', src: require('../assets/img/docker.svg'), width: 72},
        { name: 'Git', src: require('../assets/img/git-icon.svg'), width: 64},
    ];

    return (
        <div className='skills-grid'> 
        {skills.map((img) => (
            <img
                className='skill-icon'
                alt={img.name}
                key={img.name}
                src={img.src}
                draggable={false}
                width={img.width}
            />
        ))}
    </div>
    );
}

export default Skills;