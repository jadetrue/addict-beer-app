import React from "react";

interface Props {
    updateBeers: any; // What type is this?
}

const SearchBar: React.FC<Props> = ({updateBeers}) => {
    return (
        <>
            <div className="flex justify-center my-12">
                <input
                    type="text"
                    className="rounded-lg p-2 w-1/3 text-center"
                    placeholder="Find a beer"
                    onChange={(e) => updateBeers(e.target.value)}
                />
            </div>
        </>
    );
};

export default SearchBar;
