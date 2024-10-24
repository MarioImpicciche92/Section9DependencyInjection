import { Injectable,signal } from "@angular/core";
import { Task } from "../tasks/task.model";

@Injectable({
    providedIn:'root'
})
export class TaskService{
    private tasks= signal<Task[]>([]);
    allTasks=this.tasks.asReadonly();

    addTaskData(taskData:{title:string;description:string}){
        const newTask:Task={
            ...taskData,
            id:Math.random().toString(),
            status:'OPEN'
        };
        this.tasks.update((oldTasks) => [...oldTasks,newTask]);
    }
}