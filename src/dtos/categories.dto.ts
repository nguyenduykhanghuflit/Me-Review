import { IsString, IsEmail } from 'class-validator';
export class CreateCategoryDto {
   @IsString()
   name: string;
   @IsString()
   description: string;
}

export class CreateGenreDto {
   name: string;
   description: string;
   updatedAt: Date;
   updatedBy: string;
}
