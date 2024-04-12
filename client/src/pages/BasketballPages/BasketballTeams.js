import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BasketballTeams = () => {
    const [teams, setTeams] = useState([]); 

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                // const response = await axios.get(`${process.env.API_URL}/api/basketball/teams`);
                const response = await axios.get('http://localhost:3001/api/basketball/teams');
                setTeams(response.data); 
            } catch (error) {
                console.error('Error fetching teams:', error);
            }
        };

        fetchTeams(); 
    }, []);

    return (
        <div>
            <h1>Basketball Teams</h1>
            <ul style={{ listStyle: 'none' }}>
                {teams.map(team => (
                    <li key={team.team_id} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                        <img src={team.logo_url} alt={`${team.name} logo`} style={{ width: '50px', marginRight: '20px' }} />
                        <strong>{team.name}</strong> ({team.abbreviation}) - <span>{team.conference} Conference, {team.division} Division</span>
                        <br />
                        <a href={team.official_website} target="_blank" rel="noopener noreferrer">Official Website</a>
                    </li>
                ))}
            </ul> 
        </div>
    );
};

export default BasketballTeams;