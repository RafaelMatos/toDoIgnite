import styles from "./NewTask.module.css";
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from "react";
export function NewTask() {

  const [newTaskText,setNewTaskText]= useState('')

  function handleCreateNewTask(event : FormEvent) {
    event.preventDefault();
    console.log(event.target)
  }
  function handleNewTaskChange(event : ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value)
  }
  return(
    <form action="" className={styles.newTask}>
        <input type="text" placeholder="Adicione uma nova tarefa" onChange={handleNewTaskChange}/>
        <button type="submit"
           onClick={handleCreateNewTask}
        >
          Criar <PlusCircle size={32}
           
          />
        </button>
      </form>
  )
}