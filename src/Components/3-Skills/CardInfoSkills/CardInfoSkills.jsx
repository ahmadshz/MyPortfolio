/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './CardInfoSkills.css';

const CardInfoSkills = ({ header, skils }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
       setProgress(skils[0].percentage)
    },[progress])
    return (
        <div
        className="skills_infoCard"
    >
        <h1 style={{ textAlign: 'center' }}>{header}</h1>
        <div className="info-content">
            {skils.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="skill-info">
                        <p style={{ marginTop: '5px' }}>{item.skill}</p>
                        <p>{item.percentage}</p>
                    </div>
                    <div className="skill-progress-bg">
                        <div
                            className="skill-progress-percentege"
                            style={{width: `${progress}` , transitionDelay: `${index * 0.6}s`}}
                        ></div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    </div>
       
    );
};

export default CardInfoSkills;
