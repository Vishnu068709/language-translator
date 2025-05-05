import React, { useState } from 'react';

const InputForm = ({ onTranslate }) => {
    const [inputText, setInputText] = useState('');
    const [targetLanguage, setTargetLanguage] = useState('en');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleLanguageChange = (e) => {
        setTargetLanguage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onTranslate(inputText, targetLanguage);
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={inputText}
                onChange={handleInputChange}
                placeholder="Enter text to translate"
                rows="4"
                cols="50"
            />
            <select value={targetLanguage} onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="zh">Chinese</option>
                {/* Add more languages as needed */}
            </select>
            <button type="submit">Translate</button>
        </form>
    );
};

export default InputForm;