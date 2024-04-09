import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SportsNavBar.css';

const SportsNavBar = ({ links, leagues }) => {
    const [hoveredDropdown, setHoveredDropdown] = useState(null);
    const hoverTimeoutRef = useRef(null);

    const handleMouseEnterDropdown = (menuName) => () => {
        clearTimeout(hoverTimeoutRef.current);
        setHoveredDropdown(menuName);
    };

    const handleMouseLeaveDropdown = () => {
        hoverTimeoutRef.current = setTimeout(() => {
            setHoveredDropdown(null);
        }, 75); 
    };

    useEffect(() => {
        return () => clearTimeout(hoverTimeoutRef.current);
    }, []);

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
                        <div className="dropdown">
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
