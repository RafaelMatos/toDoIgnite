import styles from "./App.module.css";
import "./global.css"

import { Header } from './components/Header'
import { NewTask } from "./components/NewTask";


export function App() {

  return (
    <div>
      <Header></Header>
      <NewTask></NewTask>
      <div>
        <div><input type="checkbox" /><p>Tarefa 1</p></div>
        <div><input type="checkbox" /><p>Tarefa 2</p></div>
        <div><input type="checkbox" /><p>Tarefa 3</p></div>
        <div><input type="checkbox" /><p>Tarefa 4</p></div>
        <div><input type="checkbox" /><p>Tarefa 5</p></div>
      </div>
    </div>
  )
}


