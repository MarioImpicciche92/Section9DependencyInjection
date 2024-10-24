export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface TaskModel{
    id:string;
    title:string;
    description:string;
    status:TaskStatus;
}