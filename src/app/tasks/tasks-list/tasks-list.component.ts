import { Component, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TaskService } from '../../services/Task.service';
import { TASK_STATUS_OPTIONS, taskStatusOptionsProvider } from '../../models/Task.model';
@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers:[taskStatusOptionsProvider]
  
})
export class TasksListComponent {
  selectedFilter = signal<string>('all');
  taskStatusOptions = inject (TASK_STATUS_OPTIONS);
  private taskService = inject(TaskService);
  tasks =this.taskService.allTasks ;

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
