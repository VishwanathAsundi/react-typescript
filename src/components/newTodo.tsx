import React, { useRef } from "react";
import "./NewTodo.css";

interface todoProps {
  todoHandler: (text: string) => void;
}

const NewTodo: React.FC<todoProps> = props => {
  const textRef = useRef<HTMLInputElement>(null);
  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const textValue = textRef.current?.value;
    console.log(textValue);
    if (textValue) {
      props.todoHandler(textValue);
    }
  };
  return (
    <form
      className="form-control"
      style={{ textAlign: "center" }}
      onSubmit={onSubmitHandler}
    >
      <div>
        <label htmlFor="text-input"></label>
        <input type="text" id="text-input" ref={textRef} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};
export default NewTodo;
