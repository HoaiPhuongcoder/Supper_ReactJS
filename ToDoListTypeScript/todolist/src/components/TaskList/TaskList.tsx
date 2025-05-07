import { Todo } from "../../@types/todo.type";
import styles from "./taskList.module.scss";

type TaskListProps = {
  doneTaskList?: boolean;
  todos: Todo[];
  handleDoneTodo: (id: string, done: boolean) => void;
  startEditTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

function TaskList({
  doneTaskList,
  todos,
  handleDoneTodo,
  startEditTodo,
  deleteTodo,
}: TaskListProps) {
  const handleChangeCheckbox =
    (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      handleDoneTodo(id, event.target.checked);
    };
  return (
    <div className="mb-2">
      <h2 className={styles.title}>
        {doneTaskList ? "Hoàn Thành" : "Chưa Hoàn Thành"}
      </h2>

      <div className={styles.tasks}>
        {todos.map((todo) => (
          <div className={styles.task} key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              className={styles.taskCheckbox}
              onChange={handleChangeCheckbox(todo.id)}
            />
            <span
              className={`${styles.taskName} ${
                doneTaskList ? styles.taskNameDone : ""
              }`}
            >
              {todo.name}
            </span>
            <div className={styles.taskActions}>
              <button
                className={styles.taskBtn}
                onClick={() => {
                  startEditTodo(todo.id);
                }}
              >
                📝
              </button>
              <button
                onClick={() => {
                  deleteTodo(todo.id);
                }}
                className={styles.taskBtn}
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
