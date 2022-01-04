import React, {useState, useEffect} from "react";
import "./styles/typography.css";
import "./styles/global.css";
import CardList from "./components/CardList/CardList";
import SearchList from "./components/SearchList/SearchList";
import {getBeers} from "./services/beer.service";

function App() {
    const [beers, setBeers] = useState([]);

    const updateBeers = async (searchTerm: string) => {
        const apiFetchBeers = await getBeers(searchTerm);
        setBeers(apiFetchBeers);
    };

    return (
        <>
            <h1 className="flex justify-center mt-10 font-bold text-5xl tracking-wider">
                Addict Beer
            </h1>
            <SearchList updateSearch={updateBeers} />
            <CardList />
        </>
    );
}

export default App;
