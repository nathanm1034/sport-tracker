import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
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
        <nav className="navbar">
            <div className="navbar-left">
                <div className="menu-item">
                    <Link to="/">Home</Link>
                </div>
                <div className="menu-item" onMouseEnter={handleMouseEnterDropdown('sports')} onMouseLeave={handleMouseLeaveDropdown}>
                    <Link to="/others">Sports</Link>
                    {hoveredDropdown === 'sports' && (
                        <div className="dropdown">
                            <ul>
                                <li><Link to="/football">Football</Link></li>
                                <li><Link to="/basketball">Basketball</Link></li>
                                <li><Link to="/others">Others</Link></li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="menu-item" onMouseEnter={handleMouseEnterDropdown('temp')} onMouseLeave={handleMouseLeaveDropdown}>
                    Temp
                    {hoveredDropdown === 'temp' && (
                        <div className="dropdown">
                            <ul>
                                <li>Random 1</li>
                                <li>Random 2</li>
                                <li>Random 3</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="navbar-right">
                <div className="search-box">
                    <input type="text" placeholder="Search..." className="search-input" />
                    <button className="search-button">🔍</button> {/* Example using a simple emoji as the search icon */}
                </div>
                <div className="menu-item profile-header">
                    <Link to="/profile">Profile</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
