import { CreateTasksDto } from './create-task.dto';

import { PartialType } from '@nestjs/swagger';
export class EditTasksDto extends PartialType(CreateTasksDto) {}
