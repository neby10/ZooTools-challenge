import React, { useState, useEffect } from 'react';
import SeeLeaderboardButton from './SeeLeaderboardButton';

function LeaderboardPanel({ title, columns, buttonText, data}) {

    const [columnActive, setColumnActive] = useState(columns[0]);

    const handleColumnClick = (event) => {
        setColumnActive(event.target.value);
    }

    const leaderboardPanelStyle = {
        width: "100%",
        backgroundColor: "var(--color-layered-background)",
    }

    const leaderboardPanelHeaderStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "15px 30px",
    }

    const titleStyle = {
        fontSize: "20px",
        fontWeight: "bold",
    }

    const leaderboardItemStyle = {
        display: "flex",
        flexDirection: "row",
        fontSize: "18px",
        justifyContent: "space-between",
        margin: "10px 30px",
    }

    // const highlightedStyle = {
    //     display: "flex",
    //     flexDirection: "row",
    //     alignItems: "center",
    //     backgroundColor: "var(--color-highlight)",
    //     padding: "5px",
    //     borderRadius: "5px",
    // }

    const leaderboardPanelFooterStyle = {
        display: "flex",
        justifyContent: "flex-start",
        margin: "15px 30px",
    }

    return (
        <div style={leaderboardPanelStyle} className='my-box-shadow'>
            <div style={leaderboardPanelHeaderStyle}>
                <div style={titleStyle}>{title}</div>
                <div>
                {
                    columns.map((item, index) => (
                        <button 
                            style={{
                                backgroundColor: columnActive === item ? "var(--color-accessory-background)" : "var(--color-layered-background)",
                                borderRadius: "5px",
                                border: "none",
                                padding: "5px",
                                margin: columns[0] === item ? "0 5px 0 0" : "0 0 0 5px",
                            }} 
                            key={index} 
                            value={item} 
                            onClick={handleColumnClick}>
                                {item}
                        </button>
                    ))
                }
                </div>
            </div>
            <div>
                {
                    data[columnActive].map((dataObject, index) => (
                        <div style={leaderboardItemStyle} key={index}>
                            <div style={{
                                width: `${(dataObject.total / 80000) * 100}%`, 
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                backgroundColor: "var(--color-highlight)",
                                padding: "5px",
                                borderRadius: "5px",}}>
                                {/* IF IMAGE SRC EXISTS IN DATA, DISPLAY FLAG */}
                                {dataObject.src && <img src={dataObject.src} alt={dataObject.heading + " Flag"} width="17px" height="17px" style={{marginRight: "10px"}} />}
                                <div style={{fontSize: "16px"}}>{dataObject.heading}</div>
                            </div>
                            <div>{dataObject.total.toLocaleString()}</div>
                        </div>
                    ))
                }
            </div>
            <div style={leaderboardPanelFooterStyle} >
                <SeeLeaderboardButton buttonText={buttonText} />
            </div>
        </div>
    )
}

export default LeaderboardPanel;