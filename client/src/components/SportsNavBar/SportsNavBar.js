import React from 'react';
import { Link } from 'react-router-dom';
import useDropdown from '../Dropdown';
import './SportsNavBar.css';

const SportsNavBar = ({ links, leagues }) => {
    const { hoveredDropdown, handleMouseEnterDropdown, handleMouseLeaveDropdown } = useDropdown();

    return (
        <div className="sports-navbar">
            <div className="sports-navbar-left">
                {links.map((link, index) => (
                    <Link key={index} to={link.to} className="nav-link">
                        {link.label}
                    </Link>
                ))}
            </div>
            <div className="sports-navbar-right">
                <div className="menu-item" onMouseEnter={handleMouseEnterDropdown('leagues')} onMouseLeave={handleMouseLeaveDropdown}>
                    Leagues
                    {hoveredDropdown === 'leagues' && (
                        <div className="dropdown-right">
                            <ul>
                                {leagues.map((league, index) => (
                                    <li key={index}><Link to={league.to}>{league.label}</Link></li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SportsNavBar;
