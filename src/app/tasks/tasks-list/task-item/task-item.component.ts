import { Component, computed, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Task, TaskStatus } from '../../task.model';
import { TaskService } from '../../../services/Task.service';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  taskService = inject(TaskService);
  
  task = input.required<Task>();
  taskStatus = computed(() => {
    switch (this.task().status) {
      case 'OPEN':
        return 'Open';
      case 'IN_PROGRESS':
        return 'Working on it';
      case 'DONE':
        return 'Completed';
      default:
        return 'Open';
    }
  });

  onChangeTaskStatus(selectedTask: string, status: string) {
    let beautifulNewStatus: TaskStatus = 'OPEN';

    switch (status) {
      case 'open':
        beautifulNewStatus = 'OPEN';
        break;
      case 'in-progress':
        beautifulNewStatus = 'IN_PROGRESS';
        break;
      case 'done':
        beautifulNewStatus = 'DONE';
        break;
      default:
        break;
    }

    this.taskService.updateTaskStatus(selectedTask, beautifulNewStatus);
  }
}
