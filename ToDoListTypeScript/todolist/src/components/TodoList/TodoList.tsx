import { useEffect, useState } from "react";
import TaskInput from "../TaskInput";
import TaskList from "../TaskList";
import { Todo } from "../../@types/todo.type";
import styles from "./todoList.module.scss";
interface HandleNewTodos {
  (todos: Todo[]): Todo[];
}

const syncReactToLocal = (handleNewTodos: HandleNewTodos) => {
  const todoString = localStorage.getItem("todos");
  const todosObj: Todo[] = JSON.parse(todoString || "[]");
  const newTodosObj = handleNewTodos(todosObj);
  localStorage.setItem("todos", JSON.stringify(newTodosObj));
};

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);
  const doneTodos = todos.filter((todo) => todo.done);
  const notDoneTodos = todos.filter((todo) => !todo.done);

  useEffect(() => {
    const todoString = localStorage.getItem("todos");
    const todosObj: Todo[] = JSON.parse(todoString || "[]");
    setTodos(todosObj);
  }, []);

  const addTodo = (name: string) => {
    if (name === "") return;
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString(),
    };
    setTodos((prev) => [...prev, todo]);
    const handler = (todoObj: Todo[]) => {
      return [...todoObj, todo];
    };
    syncReactToLocal(handler);
  };

  const handleDoneTodo = (id: string, done: boolean) => {
    const handler = (todosObj: Todo[]) => {
      return todosObj.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: done };
        }
        return todo;
      });
    };
    setTodos(handler);
    syncReactToLocal(handler);
  };

  const startEditTodo = (id: string) => {
    const findedTodo = todos.find((todo) => todo.id === id);
    if (findedTodo) {
      setCurrentTodo(findedTodo);
    }
  };
  const editTodo = (name: string) => {
    setCurrentTodo((prev) => {
      if (prev) {
        return { ...prev, name };
      }
      return null;
    });
  };
  const finishEditTodo = () => {
    const handler = (todoObj: Todo[]) => {
      return todoObj.map((todo) => {
        if (todo.id === currentTodo?.id) {
          return currentTodo;
        }
        return todo;
      });
    };
    setTodos(handler);
    setCurrentTodo(null);
    syncReactToLocal(handler);
  };

  const deleteTodo = (id: string) => {
    if (currentTodo) {
      setCurrentTodo(null);
    }
    const handler = (todosObj: Todo[]) => {
      const findedIndexTodo = todosObj.findIndex((todo) => todo.id === id);
      if (findedIndexTodo > -1) {
        const result = [...todosObj];
        result.splice(findedIndexTodo, 1);
        return result;
      }
      return todosObj;
    };
    setTodos(handler);
    syncReactToLocal(handler);
  };

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput
          addTodo={addTodo}
          currentTodo={currentTodo}
          editTodo={editTodo}
          finishEditTodo={finishEditTodo}
        />
        <TaskList
          todos={notDoneTodos}
          handleDoneTodo={handleDoneTodo}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
        <TaskList
          doneTaskList
          todos={doneTodos}
          handleDoneTodo={handleDoneTodo}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default TodoList;
