export interface Pelicula{
    id: number;
    titulo: string;
    poster: string;
}

export interface LandingPageDTO {
    enCartelera?: Pelicula[];
    ProximosEstrenos?: Pelicula[];
}