import React from "react";

const SearchBar = () => {
    return (
        <div className="flex justify-center my-12">
            <input
                className="rounded-lg p-2 w-1/3 text-center"
                placeholder="Find a beer"
            />
        </div>
    );
};

export default SearchBar;
