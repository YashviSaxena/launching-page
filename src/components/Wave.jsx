import React, { useState } from 'react';

const Wave = () => {
    // State to manage the visibility of the loader and non-loader divs
    const [showLoader, setShowLoader] = useState(true);

    // Function to toggle between showing loader and non-loader divs
    const toggleDivs = () => {
        setShowLoader(!showLoader);
    };

    return (
        <div>
            {/* Loader div */}
            {showLoader && (
                <div className='loader' onClick={toggleDivs}>
                    <span className='stroke mr-1'></span>
                    <span className='stroke mr-1'></span>
                    <span className='stroke mr-1'></span>
                    <span className='stroke mr-1'></span>
                    <span className='stroke'></span>
                </div>
            )}

            {/* Non-loader div */}
            {!showLoader && (
                <div className='non-loader w-12 h-12 bg-white rounded-full flex justify-center items-center' onClick={toggleDivs}>
                    <span className='w-10 h-1 rounded-full bg-[#326BFF]'></span>
                </div>
            )}
        </div>
    );
};

export default Wave;
