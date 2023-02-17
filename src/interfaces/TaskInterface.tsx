
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

