const API_URL = "https://api.punkapi.com/v2/beers";

/**
 * Returns Beers for a given search value
 * @param value search text inputted by user
 * @returns
 */
export const getBeers = (value: string) => {
    let url = `${API_URL}?beer_name=${value}`;
    if (!value) {
        url = API_URL;
    }

    return fetch(url)
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log(error);
        });
};
