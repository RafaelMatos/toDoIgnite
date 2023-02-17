import { Trash, Circle, CheckCircle } from "phosphor-react";
import { TaskProps } from "../interfaces/TaskInterface";
import styles from "./Task.module.css";

export function Task({ content, done }: TaskProps) {
  return (
    <div className={styles.task}>
      {done ? (
          <CheckCircle size={20} weight="fill" className={styles.checkCircle}/>
      ) : (
          <Circle size={20} className={styles.circle}/>
      )}
      <p>{content}</p>
      <Trash size={20} />
    </div>
  );
}
