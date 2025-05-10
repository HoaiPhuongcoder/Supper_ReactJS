import { useRef, useState } from "react";
import styles from "./taskInput.module.scss";
import { Todo } from "../../@types/todo.type";
import connect from "../../HOC/connect";
import { debug, log } from "../../constants";
import Title from "../Title";
interface TaskInputProps {
  addTodo: (name: string) => void;
  editTodo: (name: string) => void;
  finishEditTodo: () => void;
  currentTodo: Todo | null;
}

function TaskInput({
  addTodo,
  currentTodo,
  editTodo,
  finishEditTodo,
}: TaskInputProps & typeof injectedProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string>("");
  const address = {
    street: "10 Tran Hung Dap",
  };
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
      <Title address={address} />
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
const injectedProps = { debug: debug, log: log };
export default connect(injectedProps)(TaskInput);
