import { Injectable,signal } from "@angular/core";
import { Task } from "../tasks/task.model";

@Injectable({
    providedIn:'root'
})
export class TaskService{
    tasks= signal<Task[]>([]);

    addTaskData(taskData:{title:string;description:string}){
        this.tasks.update((oldTasks) => [...oldTasks]);
    }
}