import {
   IsString,
   IsOptional,
   IsDateString,
   IsArray,
   IsBoolean,
   ValidateNested,
} from 'class-validator';
import { ObjectId } from 'mongodb';
import { isValidObjectId } from 'mongoose';

class MovieUrlDto {
   @IsString()
   public url: string;

   @IsString()
   public server: string;
}

class ImageUrlDto {
   @IsString()
   public url: string;

   @IsString()
   public type: string;
}

export class CreateMovieDto {
   @IsString()
   public title: string;

   @IsString()
   public movieName: string;

   @IsString()
   public actors: string;

   @IsOptional()
   @IsString()
   public description?: string;

   @IsOptional()
   @IsDateString()
   public releaseDate?: Date;

   @IsOptional()
   @IsString()
   public director?: string;

   @IsArray()
   @IsString({ each: true })
   public categories: string[];

   @IsArray()
   @IsString({ each: true })
   public genres: string[];

   @IsOptional()
   @IsString()
   public mainGenres?: string;

   @IsOptional()
   public rating?: number;

   @IsOptional()
   public reviews?: number;

   @IsOptional()
   public productionYear?: number;

   @IsOptional()
   @IsString()
   public country?: string;

   @IsOptional()
   @IsBoolean()
   public isPublished?: boolean;

   @IsOptional()
   @IsArray()
   @ValidateNested({ each: true })
   public movieUrls?: MovieUrlDto[];

   @IsOptional()
   @IsArray()
   @ValidateNested({ each: true })
   public imageUrls?: ImageUrlDto[];
}

export class UpdateMovieDto {
   @IsString()
   public _id: ObjectId;

   @IsString()
   public title: string;

   @IsString()
   public movieName: string;

   @IsString()
   public actors: string;

   @IsOptional()
   @IsString()
   public description?: string;

   @IsOptional()
   @IsDateString()
   public releaseDate?: Date;

   @IsOptional()
   @IsString()
   public director?: string;

   @IsArray()
   @IsString({ each: true })
   public categories: string[];

   @IsArray()
   @IsString({ each: true })
   public genres: string[];

   @IsOptional()
   @IsString()
   public mainGenres?: string;

   @IsOptional()
   public rating?: number;

   @IsOptional()
   public reviews?: number;

   @IsOptional()
   public productionYear?: number;

   @IsOptional()
   @IsString()
   public country?: string;

   @IsOptional()
   @IsBoolean()
   public isPublished?: boolean;

   @IsOptional()
   @IsArray()
   @ValidateNested({ each: true })
   public movieUrls?: MovieUrlDto[];

   @IsArray()
   public imageUrls?: ImageUrlDto[];
}
