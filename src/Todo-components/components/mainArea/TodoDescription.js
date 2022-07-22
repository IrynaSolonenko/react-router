import './TodoDescription.css';
import {useEffect, useState} from "react";

export function TodoDescription ({currentTodo, setUpdatedTodo, updatedTodo}){
    const [newTodo, setNewTodo] = useState({})
    const [isNew, setIsNew] = useState(false)

    for (let a in updatedTodo){
        a.history.find(item=>{
            return item.appliedAt
        })
    }

    useEffect(() => {
        setNewTodo(currentTodo)
    }, [currentTodo])

    const handleChangeDescription = (e) => {
        setNewTodo({...currentTodo, [e.target.name]: e.target.value})
    }

    const saveChange = () => {
        let data = new Date().toLocaleTimeString();
        setNewTodo({...newTodo, history: [...newTodo.history, {field: 'description', action: 'change', prevValue: currentTodo.description, currentValue: newTodo.description, appliedAt: data}]})
        setIsNew(true);
        newTodo.history.find(item=>{
            return item.appliedAt
        })
    }

    useEffect(() => {
        if (isNew) setUpdatedTodo(newTodo)
        setIsNew(false)
    }, [isNew])

    return(
        <>
            {currentTodo.title ?
                <div className={'mainAreaContainer'}>
                <div className={'descriptionContainer'}>
                    <h1>Title</h1>
                    <h2>
                        {newTodo.title}
                    </h2>
                    <textarea onChange={handleChangeDescription} value={newTodo.description} name="description" id="" cols="60" rows="10"/>
                <button className={'addChangeButton'} onClick={saveChange}>Save</button>
                </div>

                    <div>
                        <h1>History</h1>
                        <div className={'history'}>

                            <span><b>{'todo-name: '}</b>{currentTodo.title}</span><br />
                            <span><b>{'current todo-description: '}</b>{newTodo.description}</span><br />
                            <span><b>{'previous todo-description: '}</b>{currentTodo.description}</span><br />
                            {/*<span><b>{'change-data: '}</b>{}</span><br />*/}
                            {/*<span><b>{'is done: '}</b>{}</span>*/}

                        </div>
                    </div>

                </div>

                :
                <div>
                    Todos not found
                </div>
            }
        </>
    )

}