export interface Beers {
    id: string;
    name: string;
    image_url: string;
    description: string;
    tagline?: string;
    abv?: number;
    foodPairing?: [string];
}
