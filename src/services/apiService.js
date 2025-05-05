import axios from 'axios';

const API_URL = 'https://libretranslate.com/translate'; // Replace with Google Translate API URL if needed

export const translateText = async (text, targetLanguage) => {
    try {
        const response = await axios.post(API_URL, {
            q: text,
            target: targetLanguage,
            format: 'text'
        });
        return response.data.translatedText;
    } catch (error) {
        console.error('Error translating text:', error);
        throw error;
    }
};