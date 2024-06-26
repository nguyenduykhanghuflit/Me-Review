import { ObjectId } from 'mongodb';
declare class MovieUrlDto {
    url: string;
    server: string;
}
declare class ImageUrlDto {
    url: string;
    type: string;
}
export declare class CreateMovieDto {
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
    movieUrls?: MovieUrlDto[];
    imageUrls?: ImageUrlDto[];
}
export declare class UpdateMovieDto {
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
    movieUrls?: MovieUrlDto[];
    imageUrls?: ImageUrlDto[];
}
export {};
