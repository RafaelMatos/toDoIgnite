import { Trash, Circle, CheckCircle } from "phosphor-react";
import { TaskProps } from "../interfaces/TaskInterface";
import styles from "./Task.module.css";

export function Task({ content, done,onDeleteTask,onCompleteTask,taskId }: TaskProps) {

  function handleDeleteTask(){
    onDeleteTask(taskId)
  }
  function handleCompleteTask(){
    onCompleteTask(taskId)
  }
  return (
    <div className={styles.task}>
      {done ? (
          <button title="Tarefa não finalizada" onClick={handleCompleteTask}>
            <CheckCircle size={20} weight="fill" className={styles.checkCircle}/>
          </button>
      ) : (
          <button title="Finalizar tarefa" onClick={handleCompleteTask}>
            <Circle size={20} className={styles.circle}/>
          </button>
      )}
      <p>{content}</p>
      <button title="Deletar tarefa" onClick={handleDeleteTask}>
        <Trash size={20}  />
      </button>
    </div>
  );
}
