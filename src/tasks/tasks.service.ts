import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  createTask(CreateTaskDto: CreateTaskDto): Task {
    const { title, description } = CreateTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }

  getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] | undefined {
    const { status, search } = filterDto;

    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    if (search) {
      //...
      tasks = tasks.filter((task) => {
        if (task.title.includes(search) || task.description.includes(search)) {
          return true;
        } else {
          return false;
        }
      });
    }
    return tasks;
  }

  getTaskById(id: string): Task | undefined {
    const found = this.tasks.find((task) => task.id === id);

    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  deleteTask(id: string): Task[] | undefined {
    if (!id || !this.getTaskById(id)) throw new NotFoundException();
    return this.tasks.splice(
      this.tasks.findIndex((task) => task.id === id),
      1,
    );
  }

  updateTaskStatus(id: string, status: TaskStatus): Task | undefined {
    if (!id || !status) return;
    const task: Task | undefined = this.getTaskById(id);
    if (!task) return;
    task.status = status;
    return task;
  }
}
