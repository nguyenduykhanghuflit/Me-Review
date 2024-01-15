import { ObjectId } from 'mongoose';
export interface IMovie {
    _id: ObjectId;
    title: string;
    movieName: string;
    actors: string;
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
    type: 'category' | 'productionYear' | 'status' | 'keyword' | 'genre';
    value: string | number;
}
export interface IMovieFilter {
    page: number;
    pageSize: number;
    filters: Array<IFilterType>;
}
export interface IMovieVM {
    currentPage: number;
    totalPage: number;
    totalMovies: number;
    movies: IMovie[];
}
