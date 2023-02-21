import "./global.css";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";
import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "./interfaces/TaskInterface";
import { v4 as uuid } from "uuid";

export function App() {
  const [newTaskText, setNewTaskText] = useState("");
  const [taskCompleted, setTaskCompleted] = useState(false);
  const listTaskEmpty: Task[] = [];
  const [listTask, setListTask] = useState([...listTaskEmpty]);

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask: Task = {
      taskId:uuid(),
      content: newTaskText,
      done: taskCompleted,
    };
    setListTask([...listTask, newTask]);
    setNewTaskText('');
  }
  function handleDeleteTask(taskId : string){
    const listTasksWithoutDeleted = listTask.filter(task => task.taskId !== taskId)
    setListTask(listTasksWithoutDeleted)
  }
  function handleCompleTask(taskId : string){
    const taskListWithCompletedTask = listTask.map(task =>{
      if(task.taskId === taskId){
        task.done = !task.done
      }
      return task
    })
    setListTask(taskListWithCompletedTask)
  }


  return (
    <div>
      <Header />
      <NewTask
        value={newTaskText}
        onChangeInput={handleNewTaskChange}
        onClickCreateTask={handleCreateNewTask}
      />
      <Tasks listTasks={listTask} onDeleteTask={handleDeleteTask} onCompleteTask={handleCompleTask} />
    </div>
  );
}
