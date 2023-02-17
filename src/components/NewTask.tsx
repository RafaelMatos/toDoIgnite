import styles from "./NewTask.module.css";
import { PlusCircle } from "phosphor-react";
import { NewTaskProps } from "../interfaces/TaskInterface";

export function NewTask({ onChangeInput, onClickCreateTask,value }: NewTaskProps) {

  return (
    <form action="" className={styles.newTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={onChangeInput}
        value={value}
      />
      <button type="submit" onClick={onClickCreateTask} disabled={ value ? false : true} > 
        Criar <PlusCircle size={32} />
      </button>
    </form>
  );
}
