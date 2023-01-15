import React from 'react';
import './About.css'
import TeamMember from './TeamMember';
import peleg from './peleg.jpg'
import eden from './eden.jpeg'
import dudi from './dudi.jpeg'
const teamMembers = [
    {
        name: 'Peleg Vadbeker',
        role: 'Computer Science student',
        picture: peleg
    },
    {
        name: 'Eden Blau',
        role: 'Computer Science student and NOC engineer',
        picture: eden
    },
    {
        name: 'Dudi Kreis',
        role: 'Computer Science student and Junior Front End Developer',
        picture: dudi
    }
];

function AboutUs() {
    return (
        <div className="about-us-container">
            <h1 className="about-us-text">About Our Project</h1>
            <p className="about-us-text">Our project is a web application that helps users organize their tasks and schedule.</p>
            <h2>Meet the Team</h2>
            <div className="team-members-container">
                {teamMembers.map((member) => (
                    <TeamMember
                        key={member.name}
                        name={member.name}
                        role={member.role}
                        picture={member.picture}
                    />
                ))}
            </div>
        </div>
    );
}

export default AboutUs;
