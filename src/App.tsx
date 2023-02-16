import styles from "./App.module.css";
import "./global.css"

import { Header } from './components/Header'
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";


export function App() {

  return (
    <div>
      <Header/>
      <NewTask/>
      <Tasks/>
    </div>
  )
}


