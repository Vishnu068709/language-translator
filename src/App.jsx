import React, { useState } from 'react';
import InputForm from './components/InputForm';
import OutputDisplay from './components/OutputDisplay';
import TextToSpeechButton from './components/TextToSpeechButton';
import './styles/App.css';

const App = () => {
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [targetLanguage, setTargetLanguage] = useState('en');

    const handleTranslation = (text, language) => {
        setInputText(text);
        setTargetLanguage(language);
        // Call the translation API here and update translatedText
    };

    return (
        <div className="App">
            <h1>Language Translator</h1>
            <InputForm onTranslate={handleTranslation} />
            <OutputDisplay translatedText={translatedText} />
            <TextToSpeechButton text={translatedText} />
        </div>
    );
};

export default App;