import React from 'react';
import SearchRow from './searchRow';

const Welcome = () => {
    return (
        <div className='welcome'>
            <span className='welcome-main'>Way better than a stock car</span>
            <span className='welcome-sub'>Book extraordinary cars from local enthusiasts around the world</span>

            <SearchRow/>
        </div>
    );
}

export default Welcome;
