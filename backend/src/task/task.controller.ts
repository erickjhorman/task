import { CreateTasksDto, EditTasksDto } from './dtos';

import { TaskService } from './task.service';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

@Controller('api/task') // Task is the name of the route
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getMany() {
    const data = await this.taskService.getMany();
    return {
      message: 'Request correct',
      data,
    };
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.getOne(id);
  }

  @Post()
  async createOne(@Body() dto: CreateTasksDto) {
    const data = await this.taskService.createOne(dto);
    return {
      message: 'Task has been successfully created.',
    };
  }

  @Put(':id')
  updateOne(@Param('id', ParseIntPipe) id: number, @Body() dto: EditTasksDto) {
    return this.taskService.updateOne(id, dto);
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.deleteOne(id);
  }
}
