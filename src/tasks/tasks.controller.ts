import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './tasks.model';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskService.createTask(createTaskDto);
  }

  @Get('/:id')
  getTaskByID(@Param('id') id: string): Task {
    return this.taskService.getTaskByID(id);
  }
  @Delete('/:id')
  deleteTaskByID(@Param('id') id: string): void {
    return this.taskService.deleteTaskByID(id);
  }
}
