import React, {useState} from "react";
import "./styles/typography.css";
import "./styles/global.css";

import CardList from "./components/CardList/CardList";
import SearchBar from "./components/SearchBar/SearchBar";
import FeedbackPanel from "./components/FeedbackPanel/FeedbackPanel";

import {getBeers} from "./services/beer.service";
import {Beers} from "./model/Beers";

function App() {
    const [searchText, setSearchText] = useState("");
    const [beers, setBeers] = useState<Beers[]>([]);

    /**
     * This is a function that will return the beers when searched for
     * @param searchText
     */
    const updateBeers = async (searchText: string) => {
        const apiFetchBeers = await getBeers(searchText);
        setBeers(apiFetchBeers);
    };

    /**
     * This is a function that will filter the beers based on the searchText
     */
    const matchingBeers = beers.filter((beer) => {
        const beerName = beer.name.toLowerCase();
        return beerName.includes(searchText.toLowerCase());
    });

    return (
        <>
            <h1 className="flex justify-center mt-10 font-bold text-5xl tracking-wider">
                Addict Beer
            </h1>
            <SearchBar updateBeers={updateBeers} />
            {beers.length ? (
                <CardList searchText={searchText} beers={matchingBeers} />
            ) : (
                <FeedbackPanel />
            )}
        </>
    );
}

export default App;
