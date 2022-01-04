const API_URL = "https://api.punkapi.com/v2/beers";

export const getBeers = (value: string) => {
    return fetch(`${API_URL}?beer_name=${value}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            return data;
        });
};
