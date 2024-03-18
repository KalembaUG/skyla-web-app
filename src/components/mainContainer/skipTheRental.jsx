import React from 'react';

const SkipTheRental = () => {
    return (
        <div className='counter'>
            <span className='heading-main'>Skip the rental counter</span>

            <div className="counter-grid">
            <div className="counter-grid-item">

                <h5 className="">THE CAR YOU WANT</h5>
                <p className="">Choose from over 800 unique makes and models, from affordable daily drivers to rare specialty cars.</p>
                </div>
                <div className="counter-grid-item">
                    <h5>WHERE YOU WANT IT</h5>
                    <p>Pick up the car or get it delivered, wherever you need it, up to 35% less than traditional agencies.</p>
                    
                </div>
           </div>
                <div className="counter-button-container">
                    <button className="counter-button">Book the perfect car</button>
                </div>
        </div>
    );
}

export default SkipTheRental;
