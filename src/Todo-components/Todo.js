import {TodoForm} from "./components/leftSidebar/TodoForm";
import {TodoDescription} from "./components/mainArea/TodoDescription";
import './components/Todo.css'
import {useEffect, useState} from "react";

export default function Todo (){

    const [lists, setLists] = useState([
        {id:1, title: 'Clean the flat', completed: false, description: 'прибраться в комнате получше', history: []},
        {id:2, title: 'Garbage', completed: false, description: '', history: []},
        {id:3, title: 'Prepare dinner', completed: false, description: '', history: []}
    ])
    const [currentTodo, setCurrentTodo] = useState({})
    const [updatedTodo, setUpdatedTodo] = useState({})

    useEffect(() => {
        console.log(updatedTodo)
        setLists(lists.map(item => item.id === updatedTodo.id ? updatedTodo : item))
    }, [updatedTodo])


        return(
            <>
                <div className={'todo'}>
                    <TodoForm setLists={setLists} lists={lists}  setCurrentTodo={setCurrentTodo}
                    />
                    <TodoDescription setUpdatedTodo={setUpdatedTodo} currentTodo={currentTodo}/>
                </div>

            </>
        )
}