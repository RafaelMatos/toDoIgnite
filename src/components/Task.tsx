import { Trash, Circle, CheckCircle } from "phosphor-react";
import { TaskProps } from "../interfaces/TaskInterface";
import styles from "./Task.module.css";

export function Task({ content, done,onDeleteTask,taskId }: TaskProps) {

  function handleDeleteTask(){
    onDeleteTask(taskId)
  }
  return (
    <div className={styles.task}>
      {done ? (
          <CheckCircle size={20} weight="fill" className={styles.checkCircle}/>
      ) : (
          <Circle size={20} className={styles.circle}/>
      )}
      <p>{content}</p>
      <button title="Deletar tarefa" onClick={handleDeleteTask}>
        <Trash size={20}  />
      </button>
    </div>
  );
}
