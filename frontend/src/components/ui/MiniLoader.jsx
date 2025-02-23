import React from 'react';
import './MiniLoader.css'; // You will include custom animations in a separate CSS file.

const MiniLoader = () => {
    return (
        <div className="flex items-center justify-center space-x-2">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
    );
};

export default MiniLoader;
