import React, { useState } from "react";
import NewTodo from "./components/newTodo";
import TodoList from "./components/todolist";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, { id: Math.random(), text: text }]);
  };
  const deleteTodo = (id: number) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id);
    });
  };
  return (
    <div>
      <NewTodo todoHandler={todoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
