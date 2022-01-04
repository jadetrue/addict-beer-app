import React, {useEffect, useState} from "react";
import {getBeers} from "../../services/beer.service";

interface Props {
    updateSearch: (e: string) => void;
}

const SearchList: React.FC<Props> = (props) => {
    const [search, setSearch] = useState<string>("");

    // useEffect(() => {
    //     const value = search.toLowerCase();
    //     console.log(getBeers(value));
    // }, [search]);

    return (
        <>
            <div className="flex justify-center my-12">
                <input
                    type="text"
                    className="rounded-lg p-2 w-1/3 text-center"
                    placeholder="Find a beer"
                    onChange={(e) => props.updateSearch(e.target.value)}
                />
            </div>
        </>
    );
};

export default SearchList;
