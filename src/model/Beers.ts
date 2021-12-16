export interface Beers {
    id: string;
    name: string;
    description: string;
    tagline?: string;
    abv?: number;
    foodPairing?: [string];
}
