import React, { useState } from 'react';
import HoverBox from './HoverBox';

function BarChartItem({ item }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const barStyle = {
        backgroundColor: "var(--color-yellow)",
        width: "15px",
        height: `${item.value / 85}px`,
        margin: "0 4px",
        borderRadius: "5px",
        position: "relative",
    }

    return (
        <div 
            style={barStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {
                isHovered && 
                <HoverBox item={item} />
            }
        </div>
    )
}

export default BarChartItem;