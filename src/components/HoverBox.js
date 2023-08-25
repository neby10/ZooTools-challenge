import React from 'react';

function HoverBox({ item }) {

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

    const signupsTextStyle = {
        margin: "4px",
        fontSize: "12px",
        display: "flex",
    }

    const dateTextStyle = {
        margin: "4px",
        fontSize: "10px",
        color: "var(--color-accessory-text)",
        fontWeight: "bold",
    }


    return (
        <div 
            className='my-box-shadow'
            style={popUpBoxStyle}>
                <div style={signupsTextStyle}>
                    <span style={{fontWeight: "bold"}}>{item.value.toLocaleString()}</span>
                    <span style={{marginLeft: "4px"}}>signups</span>
                </div>
                <div style={dateTextStyle}>{item.date}</div>
                <div style={pointStyle}></div>
        </div>
    )
}

export default HoverBox;