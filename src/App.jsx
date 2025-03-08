import React from 'react';
import InfoBox from './InfoBox'; // Ensure this import is only included once
import SearchBox from './SearchBox';
import './App.css'; // Uncommenting to apply styles

function App() {
    try {
        return (
            <div>
                <InfoBox />
                <SearchBox />
            </div>
        );
    } catch (error) {
        console.error("Error rendering App:", error);
        return <div>Error occurred while rendering the application.</div>;
    }
}

export default App;
