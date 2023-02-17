import { ChangeEvent, FormEvent } from "react";

export interface Task  {
  content: string;
  done?: boolean;
}

export interface TaskProps{
  content: string;
  done?: boolean;
}

export interface TasksProps {
  listTasks : Task[]
}

export interface NewTaskProps {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCreateTask: (event: FormEvent) => void;
  value:string
}

