import { TasksProps } from "../interfaces/TaskInterface";
import { Task } from "./Task";
import styles from "./Tasks.module.css";

export function Tasks({ listTasks, onDeleteTask }: TasksProps) {
  const tasksDone = listTasks.filter((task) => task.done === true);
  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <div className={styles.created}>
          <p>
            Tarefas criadas <span>{listTasks.length}</span>
          </p>
        </div>
        <div className={styles.done}>
          <p>
            Concluídas{" "}
            <span>
              {tasksDone.length} de {listTasks.length}
            </span>
          </p>
        </div>
      </div>
      {listTasks.map((task) => {
        return (
          <Task
            key={task.taskId}
            taskId={task.taskId}
            content={task.content}
            done={task.done}
            onDeleteTask={onDeleteTask}
          />
        );
      })}
    </div>
  );
}
