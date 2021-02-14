import React from "react";

import "./TodoList.css";

interface todoListProps {
  todos: { id: number; text: string }[];
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<todoListProps> = props => {
  return (
    <ul>
      {props.todos.map(todo => {
        return (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={props.deleteTodo.bind(null, todo.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default TodoList;
