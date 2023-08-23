import React from 'react';

function InsightItem({ item }) {


    return (
        <div className='InsightItem'>
            <p>{item.title}</p>
            <p>{item.caption}</p>
        </div>
    )
}

export default InsightItem;