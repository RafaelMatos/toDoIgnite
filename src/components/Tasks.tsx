import { useState } from "react";
import { Task } from "./Task";
import styles from "./Tasks.module.css";

interface Task {
  content : string,
  done : boolean
}

export function Tasks() {
  const [taskList,setTaskList]= useState<Task[]>([])
  const taskList2: Task[] = [
    { content: "Tarefa 1" , done:true},
    { content: "Tarefa 2" ,done:true},
    { content: "Tarefa 3" ,done:false},
    { content: "Tarefa 4" ,done:false},
    { content: "Tarefa 5" ,done:false},
  ];
  const tasksDone = taskList.filter((task)=> task.done===true)
  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <div className={styles.created}>
          <p>
            Tarefas criadas <span>{taskList.length}</span>
          </p>
        </div>
        <div className={styles.done}>
          <p>
            Concluídas <span>{tasksDone.length} de {taskList.length}</span>
          </p>
        </div>
      </div>
      {taskList.map((task) => {
        return <Task content={task.content} done={task.done}/>;
      })}
      
    </div>
  );
}
