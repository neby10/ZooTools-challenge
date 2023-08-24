import React from 'react';

function BarChartPanel({items}) {

    const barChartPanelStyle = {
        backgroundColor: "var(--color-layered-background)",
    }

    const barChartStyle = {
        display: "flex",
        flexDirection: "row",
    }

    return (
        <div style={barChartPanelStyle} className='section my-box-shadow'>
            <h2>100,000 Participants</h2>
            <div style={barChartStyle}>
                {
                    items.map((item, index) => (
                        <div className='bar-chart-item' style={{
                            backgroundColor: "var(--color-yellow)",
                            width: "10px",
                            height: `${item.value / 100}px`,
                            margin: "0 4px",
                            borderRadius: "5px",
                        }} key={index}></div>
                    ))
                }
            </div>
        </div>
    )
}

export default BarChartPanel;