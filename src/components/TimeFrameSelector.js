import React from 'react';

function TimeFrameSelector({ lengths }) {

    return (
        <div className='TimeFrameSelector'>
            {
                lengths.map((item, index) => (
                    <span key={index}>{item}</span>
                ))
            }
            
        </div>
    )
}

export default TimeFrameSelector;