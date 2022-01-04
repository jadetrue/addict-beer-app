import React, {useEffect, useState} from "react";
import {getBeers} from "../../services/beer.service";
import CardList from "../CardList/CardList";

const SearchList: React.FC = () => {
    const [search, setSearch] = useState<string>("");
    const [isDisplaying, setIsDisplaying] = useState(Boolean);

    useEffect(() => {
        const updateBeers = async (search: any) => {
            const response = await getBeers(search);
            console.log(response);
        };
        updateBeers(search);
    }, [search]);

    return (
        <>
            <div className="flex justify-center my-12">
                <input
                    type="text"
                    className="rounded-lg p-2 w-1/3 text-center"
                    placeholder="Find a beer"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            {isDisplaying && <CardList />}
        </>
    );
};

export default SearchList;
