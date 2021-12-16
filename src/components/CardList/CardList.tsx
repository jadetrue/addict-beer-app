import React, {useEffect, useState} from "react";
import {Beers} from "../../model/Beers";
import Card from "../Card/Card";
import Tag from "../Tag/Tag";

const CardList = () => {
    const [beers, setBeers] = useState<Beers[]>([]);

    const API_URL = "https://api.punkapi.com/v2/beers";

    useEffect(() => {
        const fetchBeers = () => {
            fetch(API_URL)
                .then((res) => res.json())
                .then((jsonResponse) => {
                    setBeers(jsonResponse);
                })
                .catch((error) => {
                    console.error(error);
                });
        };
        return fetchBeers();
    }, []);

    return (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5">
            {beers.map((beer) => {
                return (
                    <Card
                        key={beer.id}
                        title={beer.name}
                        description={beer.description}
                        tagline={beer.tagline}
                    >
                        <Tag>{`${beer.abv}%`}</Tag>
                    </Card>
                );
            })}
        </div>
    );
};

export default CardList;
