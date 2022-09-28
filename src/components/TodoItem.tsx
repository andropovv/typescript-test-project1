import React, {FC, useState} from 'react';
import {ITodo} from "../types/types";

interface TodoItemProps {
    todo: ITodo;
    onToggleTodo: (id: number) => void
}

const TodoItem:FC<TodoItemProps> = ({todo, onToggleTodo}) => {

    return (
        <div className='user-item'>
            <input className='input-radio' onChange={() => onToggleTodo(todo.id)} type="checkbox" checked={todo.completed}/>
            {todo.id}. {todo.title}
        </div>
    );
};

export default TodoItem;