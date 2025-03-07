import { useEffect, useState } from "react";

export default function Joker() {
    const jokeApiUrl = "https://official-joke-api.appspot.com/random_joke"; 
    const translateApiUrl = "https://translation.googleapis.com/language/translate/v2";
    const apiKey = "YOUR_GOOGLE_TRANSLATE_API_KEY"; // Replace with your Google Translate API key
    const [isLoading, setIsLoading] = useState(false);

    let [joke, setJoke] = useState({});
    let [translatedJoke, setTranslatedJoke] = useState({});
    let [error, setError] = useState(null);

    const getJoke = async () => {
        try {
            setIsLoading(true);
            let response = await fetch(jokeApiUrl);

            let jsonResponse = await response.json();
            console.log(jsonResponse);
            setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });

            let setupTranslation = await translateText(jsonResponse.setup, "hi");
            let punchlineTranslation = await translateText(jsonResponse.punchline, "hi");

            setTranslatedJoke({ setup: setupTranslation, punchline: punchlineTranslation }); 

        } catch (err) {
            console.error("Error fetching joke or translation:", err);
            setError("Error fetching joke or translation. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    const translateText = async (text, targetLanguage) => {
        try {
            let response = await fetch(`${translateApiUrl}?key=${apiKey}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    q: text,
                    target: targetLanguage,
                }),
            });
            let jsonResponse = await response.json();
            return jsonResponse.data.translations[0].translatedText;
        } catch (err) {
            console.error("Error translating text:", err);
            setError("Error translating text. Please check your API key and try again.");
            return text; // Return the original text if translation fails
        }
    };

    useEffect(() => {
        async function getFirstJoke() {
            await getJoke();
        }
        getFirstJoke();
    }, []);

    return (
        <div>
            <h3>Joker!</h3>
            <h2>{translatedJoke.setup}</h2>
            <h2>{translatedJoke.punchline}</h2> 

            <button onClick={getJoke} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'New Joke'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}
