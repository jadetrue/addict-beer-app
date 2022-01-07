const API_URL = "https://api.punkapi.com/v2/beers";

/**
 * Returns Beers for a given search value
 * @param value search text inputted by user
 * @returns
 */
export const getBeers = (value: string) => {
    return fetch(`${API_URL}?beer_name=${value}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            return data;
        });
};

export const fetchBeerData = () => {
    fetch(API_URL)
        .then((res) => res.json())
        .then((jsonResponse) => {
            return jsonResponse;
        })
        .catch((error) => {
            console.error(error);
        });
};
