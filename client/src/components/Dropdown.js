import { useState, useEffect, useRef } from 'react';

const useDropdown = () => {
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

    return { hoveredDropdown, handleMouseEnterDropdown, handleMouseLeaveDropdown };
};

export default useDropdown;
