import { useRef, useState } from "react";
import styles from "./taskInput.module.scss";
import { Todo } from "../../@types/todo.type";
type TaskInputProps = {
  addTodo: (name: string) => void;
  editTodo: (name: string) => void;
  finishEditTodo: () => void;
  currentTodo: Todo | null;
};

function TaskList({
  addTodo,
  currentTodo,
  editTodo,
  finishEditTodo,
}: TaskInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentTodo) {
      finishEditTodo();
    } else {
      addTodo(name);
    }
    setName("");
    inputRef.current?.focus();
  };
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (currentTodo) {
      editTodo(value);
    } else {
      setName(value);
    }
  };
  return (
    <div className="mb-2">
      <h1 className={styles.title}>To do list typescript</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="caption goes here"
          value={currentTodo ? currentTodo.name : name}
          onChange={onChangeInput}
        />
        <button type="submit">{currentTodo ? "✅" : "➕"}</button>
      </form>
    </div>
  );
}

export default TaskList;
