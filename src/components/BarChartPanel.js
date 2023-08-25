import React from 'react';
import BarChartItem from './BarChartItem';

function BarChartPanel({items}) {



    const barChartPanelStyle = {
        backgroundColor: "var(--color-layered-background)",
    }

    const barChartStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        margin: "0 30px",
        padding: "20px",

        // width: 100%;
        // height: 300px; /* Set the height of the chart container */
        // border: 1px solid #ccc;
        // padding: 10px;
    }

    const barChartHeaderStyle = {
        float: "left",
        position: "absolute",
        zIndex: "2",
        margin: "0 30px",
        padding: "20px",
        textAlign: "left",
    }

    return (
        <div style={barChartPanelStyle} className='section my-box-shadow'>
            <div style={barChartHeaderStyle}>
                <div style={{fontSize: "22px", fontWeight: "bold"}}>100,000 <img src='/emblems/people.png' alt='people icon' width="22px" height="22px" /></div>
                <div>Participants</div>
            </div>
            <div style={barChartStyle}>
                {
                    items.map((item, index) => (
                        <BarChartItem key={index} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default BarChartPanel;