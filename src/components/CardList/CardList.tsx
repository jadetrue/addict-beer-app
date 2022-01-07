import React, {useEffect, useState} from "react";
import {Beers} from "../../model/Beers";
import {fetchBeerData} from "../../services/beer.service";
import Card from "../Card/Card";
import Tag from "../Tag/Tag";

interface Props {
    searchText: string;
    beers: Beers[];
}

const CardList: React.FC<Props> = ({beers}) => {
    return (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5 h-3/6">
            {beers.map((beer: any) => {
                return (
                    <Card
                        key={beer.id}
                        imageUrl={beer.image_url}
                        alt={beer.name}
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
