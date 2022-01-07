import React from "react";
import IconButton from "../IconButton/IconButton";
import {ReactComponent as Delete } from "../../Icons/delete.svg"

const Todo = ({text,completed,onToggleCompleted,onDeleteTodo }) => (
     
        <>
            <input
          type="checkbox"
          className="TodoList__checkbox"
          checked={completed}
          onChange={onToggleCompleted}
        />
        <p className="TodoList__text">{text}</p>
        {/* <button
          type="button"
          className="TodoList__btn"
          onClick={onDeleteTodo}
        >
          Удалить
            </button> */}
    <IconButton onClick={onDeleteTodo}>
      <Delete width="40" height="40" fill="#fff" />
    </IconButton>
        </>
 );

 
 
export default Todo;