import React from 'react';
import SportsNavBar from '../../components/SportsNavBar/SportsNavBar';

const basketballLinks = [
    { label: 'Basketball Home', to: '/basketball' },
    { label: 'Schedule', to: '/basketball/schedule' },
    { label: 'Standings', to: '/basketball/standings' },
    { label: 'Teams', to: '/basketball/teams'},
];

const basketballLeagues = [
    { label: 'NBA', to: '/basketball/nba' },
    { label: 'EuroLeague', to: '/basketball/euroleague' },
];

const BasketballSchedule = () => (
    <>
        <SportsNavBar links={basketballLinks} leagues={basketballLeagues} />
    </>
);

export default BasketballSchedule;