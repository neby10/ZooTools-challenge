import React, { useState } from 'react';

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
        width: "13px",
        height: `${item.value / 85}px`,
        margin: "0 4px",
        borderRadius: "5px",
        position: "relative",
    }

    const popUpBoxStyle = {
        backgroundColor: "var(--color-layered-background)",
        fontSize: "14px",
        position: "absolute",
        margin: "4px",
        padding: "5px",
        border: "1px solid #E2E2E4",
        borderRadius: "5px", 
        bottom: 'calc(100% + 10px)',
        left: "20%",
        transform: "translateX(-50%)",
        zIndex: "2",
    }

    const pointStyle = {
        position: 'absolute',
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        borderLeft: '10px solid transparent',
        borderRight: '10px solid transparent',
        borderTop: '10px solid white',
    }

    return (
        <div 
            style={barStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {
                isHovered && 
                <div 
                    className='my-box-shadow'
                    style={popUpBoxStyle}>
                        <div style={{margin: "4px", fontSize: "12px", display: "flex"}}>
                            <span style={{fontWeight: "bold"}}>{item.value.toLocaleString()}</span>
                            <span style={{marginLeft: "4px"}}>signups</span>
                        </div>
                        <div style={{margin: "4px", fontSize: "10px", color: "var(--color-accessory-text)", fontWeight: "bold"}}>{item.date}</div>
                        <div style={pointStyle}></div>
                </div>
            }
        </div>
    )
}

export default BarChartItem;