import "./global.css";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";
import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "./interfaces/TaskInterface";

export function App() {
  const [newTaskText, setNewTaskText] = useState("");
  const listTaskEmpty: Task[] = [];
  const [listTask, setListTask] = useState([...listTaskEmpty]);

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask: Task = {
      content: newTaskText,
      done: false,
    };
    setListTask([...listTask, newTask]);
    setNewTaskText('');
  }

  return (
    <div>
      <Header />
      <NewTask
        value={newTaskText}
        onChangeInput={handleNewTaskChange}
        onClickCreateTask={handleCreateNewTask}
      />
      <Tasks listTasks={listTask} />
    </div>
  );
}
