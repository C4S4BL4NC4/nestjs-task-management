import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import type { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() filterDto: GetTasksFilterDto): Task[] | undefined {
    if (Object.keys(filterDto).length) {
      return this.tasksService.getTasksWithFilters(filterDto);
    } else {
      return this.tasksService.getAllTasks();
    }
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task | undefined {
    return this.tasksService.getTaskById(id);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): Task[] | undefined {
    return this.tasksService.deleteTask(id);
  }

  @Patch('/:id/:status')
  updateTask(
    @Param('id') id: string,
    @Param('status') status: TaskStatus,
  ): Task | undefined {
    return this.tasksService.updateTaskStatus(id, status);
  }

  @Post()
  createTask(@Body() CreateTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(CreateTaskDto);
  }
}
