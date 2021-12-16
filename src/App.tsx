import React from "react";
import "./styles/typography.css";
import "./styles/global.css";
import CardList from "./components/CardList/CardList";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
    return (
        <div>
            <SearchBar />
            <CardList />
        </div>
    );
}

export default App;
