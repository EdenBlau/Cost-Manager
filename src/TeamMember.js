import React from 'react';
function TeamMember({ name, role, picture }) {
    return (
        <div className="team-member-card">
            <img src={picture} alt={name} />
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    );
}

export default TeamMember;