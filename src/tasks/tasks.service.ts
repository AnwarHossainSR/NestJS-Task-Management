import { CreateTaskDto } from './dto/create-task.dto';
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.DONE,
    };
    this.tasks.push(task);
    return task;
  }

  getTaskByID(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  deleteTaskByID(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
