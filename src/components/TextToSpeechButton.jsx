import React from 'react';

const TextToSpeechButton = ({ text }) => {
    const handleTextToSpeech = () => {
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
    };

    return (
        <button onClick={handleTextToSpeech}>
            Speak Translated Text
        </button>
    );
};

export default TextToSpeechButton;