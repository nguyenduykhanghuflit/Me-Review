export interface IMovie {
    title: string;
    movieName: string;
    description?: string;
    releaseDate?: Date;
    director?: string;
    categories: string[];
    genres: string[];
    mainGenres?: string;
    rating?: number;
    reviews?: number;
    productionYear?: number;
    country?: string;
    isPublished?: boolean;
    movieUrls?: {
        url: string;
        server: string;
    }[];
    imageUrls?: {
        url: string;
        type: string;
    }[];
}
export interface IFilterType {
    type: 'category' | 'productionYear' | 'status';
    value: string | number;
}
export interface IMovieFilter {
    page: number;
    pageSize: number;
    filters: Array<IFilterType>;
}
export interface IMovieVM {
    movies: IMovie[];
    totalPage: number;
}
