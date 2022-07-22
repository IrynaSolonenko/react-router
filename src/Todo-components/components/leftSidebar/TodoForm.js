import './styles/TodoForm.css'
import {useId, useMemo, useState} from "react";
import TodoAdd from "./TodoAdd";
import React from "react";
import {TodoList} from "./TodoList";
import {TodoSearchForm} from "./TodoSearchForm";

export function TodoForm({setCurrentTodo, name, setLists, lists}) {

    const createItem = (newItem) => {
        setLists([...lists, newItem])
    }

    const [filter, setFilter] = useState({query: ''})

const sortedList = useMemo(()=>{
    if (filter.query){
        return sortedList.filter(list=>list.title.toLowerCase().includes(filter.query))
    }
    return lists;
}, [filter.sort, lists])

    const sortedAndSearchLists = useMemo(()=>{
        return sortedList.filter(list=>list.title.toLowerCase().includes(filter.query))
    },[filter.query, sortedList])


    return (
        <div className='mainForm'>
            <form
            >
               <TodoSearchForm
               filter={filter}
               setFilter={setFilter}
               />
                <TodoList
                    name={name}
                    setCurrentTodo={setCurrentTodo}
                    lists={sortedAndSearchLists}
                />
             <TodoAdd create={createItem}/>
            </form>
        </div>
    )
}
