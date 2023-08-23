import React from 'react';
import InsightItem from './InsightItem';

function OverviewPanel({ title, caption, items}) {

    const overviewPanelStyle = {
        // border: "1px solid black",
        padding: "40px",
        backgroundColor: "var(--color-layered-background)",
    }

    const overviewPanelHeaderStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
    }

    const insightItemContainerStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        justifyContent: "space-between",
        gridColumnGap: "25px",
        gridRowGap: "15px",
    }

    const titleStyle = {
        textAlign: "left",
        margin: "0px",
        fontSize: "40px",
        fontWeight: "bold",
    }

    const captionStyle = {
        textAlign: "left",
        margin: "0px",
        fontSize: "26px",
        fontWeight: "normal",
    }

    const buttonStyle = {
        padding: "15px 20px",
        borderRadius: "10px",
        border: "1px solid #8E8E8E",
        backgroundColor: "var(--color-layered-background)",
    }

    return (
        <div className='section my-box-shadow' style={overviewPanelStyle}>
            <div style={overviewPanelHeaderStyle}>
                <div>
                    <h2 style={titleStyle}>{title}</h2>
                    <h3 style={captionStyle}>{caption}</h3>
                </div>
                <div>
                    <button style={buttonStyle} onClick={() => alert("Ask question button was clicked.")}>Ask question</button>
                </div>
            </div>
            <div style={insightItemContainerStyle} >
                {
                    items.map((item, index) => (
                        <InsightItem key={index} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default OverviewPanel;