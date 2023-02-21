import { ChangeEvent, FormEvent } from "react";

export interface Task  {
  taskId : string;
  content: string;
  done?: boolean;
}

export interface TaskProps{
  taskId:string;
  content: string;
  done?: boolean;
  onDeleteTask : (taskId:string)=>void
  onCompleteTask : (taskId:string)=>void
}

export interface TasksProps {
  listTasks : Task[]
  onDeleteTask : (taskId:string)=>void
  onCompleteTask : (taskId:string)=>void
}

export interface NewTaskProps {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCreateTask: (event: FormEvent) => void;
  value:string
}

