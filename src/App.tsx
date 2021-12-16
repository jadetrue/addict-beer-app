import React from "react";
import "./styles/typography.css";
import "./styles/global.css";
import CardList from "./components/CardList/CardList";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
    return (
        <>
            <h1 className="flex justify-center mt-10 font-bold text-5xl tracking-wider">
                Addict Beer
            </h1>
            <SearchBar />
            <CardList />
        </>
    );
}

export default App;
