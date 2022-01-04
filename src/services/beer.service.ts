const API_URL = "https://api.punkapi.com/v2/beers";

export const getBeers = (value: string) => {
    return fetch(`${API_URL}?name=${value}`)
        .then((res) => res.json())
        .then((data) => {
            for (const index in data) {
                const result = data[index];
                const newResult = Object.values(result.name).join("");
                return newResult;
            }
        });
};
