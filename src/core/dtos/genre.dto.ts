import { IsString, IsEmail, IsDate, IsOptional } from 'class-validator';
export class CreateGenreDto {
   @IsString()
   name: string;

   @IsString()
   description: string;

   @IsDate()
   @IsOptional()
   updatedAt?: Date;

   @IsString()
   @IsOptional()
   updatedBy?: string;
}
