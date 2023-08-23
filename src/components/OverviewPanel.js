import React from 'react';
import InsightItem from './InsightItem';

function OverviewPanel({ title, caption, items}) {

    return (
        <div className='OverviewPanel'>
            <h1>{title}</h1>
            <h2>{caption}</h2>
            <button onClick={() => alert("Ask question button was clicked.")}>Ask question</button>
            {
                items.map((item, index) => (
                    <InsightItem key={index} item={item} />
                ))
            }
        </div>
    )
}

export default OverviewPanel;