import styles from "./NewTask.module.css";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "./Task";
// import { Task } from './../interfaces/TaskInterface'
interface Task {
  content: string;
  done?: boolean;
}

interface NewTaskProps {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCreateTask: (event: FormEvent) => void;
}
export function NewTask({ onChangeInput, onClickCreateTask }: NewTaskProps) {
  
  return (
    <form action="" className={styles.newTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={onChangeInput}
      />
      <button type="submit" onClick={onClickCreateTask}>
        Criar <PlusCircle size={32} />
      </button>
    </form>
  );
}
