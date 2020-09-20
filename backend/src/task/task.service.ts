import { ApiResponse } from '@nestjs/swagger/dist/decorators/api-response.decorator';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTasksDto, EditTasksDto } from './dtos';

import { Task } from './entities/tasks.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
  ) {}
  async getMany(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async getOne(id: number) {
    const task = this.taskRepository.findOne(id);
    if (!task) throw new NotFoundException('Task does not exist');
    return task;
  }

  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  async createOne(dto: CreateTasksDto) {
    const task = this.taskRepository.create(dto); // Create an object to the repository and then save it in the database
    return await this.taskRepository.save(task);
  }

  async updateOne(id: number, dto: EditTasksDto) {
    const task = await this.taskRepository.findOne(id);

    if (!task) throw new NotFoundException('Tasks does not exist');
    const taskEdited = Object.assign(task, dto); // combine two clases the task is the result from the databse and dto is the new object who comes from the form and the save it in the database

    return await this.taskRepository.save(taskEdited);
  }

  async deleteOne(id: number) {
    return await this.taskRepository.delete(id);
  }
}
