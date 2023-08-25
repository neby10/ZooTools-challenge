import React, { useEffect, useState } from 'react';

function TimeFrameSelector({ lengths }) {
    const [currentTimeFrame, setCurrentTimeFrame] = useState(lengths[0]);

    const handleTimeFrameClick = (event) => {
        setCurrentTimeFrame(event.target.value);
    }

    const timeFrameSelectorContainer = {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "var(--color-layered-background)",
        justifyContent: "center",
        borderRadius: "10px",
        boxShadow: "0px 3px 2px #E2E2E4",
    }

    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <div style={timeFrameSelectorContainer}>
            {
                lengths.map((item, index) => (
                    <button style={{
                        backgroundColor: currentTimeFrame === item ? "#E2E3E8" : "var(--color-main-background)",
                        borderRadius: "5px",
                        border: "none",
                        padding: "5px",
                        fontSize: "14px",
                        margin: "5px",
                        padding: "8px",
                    }}  
                    onClick={handleTimeFrameClick}
                    value={item}
                    key={index}>
                        {item}
                    </button>
                ))
            }
            </div>            
        </div>
    )
}

export default TimeFrameSelector;