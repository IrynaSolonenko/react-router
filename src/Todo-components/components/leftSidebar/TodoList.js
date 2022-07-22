import './styles/TodoList.css';
import {TodoItem} from "./TodoItem";
import React, {useState} from "react";

export function TodoList ({lists, setCurrentTodo}){

    return(
    <div>
        <ul className='todoList'>
            {lists.map((todoItem) =>
                    <TodoItem item={todoItem}
                              key={todoItem.id}
                              setCurrentTodo={setCurrentTodo}
                    />

                )
            }
        </ul>
    </div>
    )
}
