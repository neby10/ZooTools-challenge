import React from 'react';

function InsightItem({ item }) {
    const insightItemContainerStyle = {
        backgroundColor: "var(--color-layered-background)",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        borderRadius: "10px",
    }

    const titleContainerStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }

    const emblemStyle = {
        borderRadius: "10px",
        margin: "12px",
    }

    const bottomCaptionStyle = {
        background: "var(--color-accessory-background)",
        padding: "12px",
        textAlign: "left",
        fontSize: "12px",
    }

    return (
        <div style={insightItemContainerStyle}>
            <div style={titleContainerStyle} >
                <img src={item.emblem} alt="box" width="40" height="40" style={emblemStyle} />
                <div><strong style={{fontSize: "14px"}}>{item.title}</strong></div>
            </div>
            <div style={bottomCaptionStyle} >{item.caption}</div>
        </div>
    )
}

export default InsightItem;