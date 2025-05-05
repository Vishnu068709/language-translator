import React from 'react';

const OutputDisplay = ({ translatedText }) => {
    return (
        <div className="output-display">
            <h2>Translated Text:</h2>
            <p>{translatedText}</p>
        </div>
    );
};

export default OutputDisplay;