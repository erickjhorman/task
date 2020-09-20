import { IsString, Length, MinLength, MaxLength } from 'class-validator';

export class CreateTasksDto {
  @IsString()
  @MinLength(5, {
    message: 'name is too short',
  })
  @MaxLength(30, {
    message: 'name is too long',
  })
  name: string;

  @IsString()
  @MinLength(10, {
    message: 'description is too short',
  })
  @MaxLength(150, {
    message: 'description is too long',
  })
  @IsString()
  description: string;
}
