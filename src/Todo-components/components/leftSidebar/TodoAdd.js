import React from 'react';
import {useState} from "react";

const TodoAdd = ({create}) => {

    const [list, setList] = useState({title: '',description: ''})

    const addNewItem = (event) => {
        event.preventDefault();

       const newItem = {...list, id: Date.now()}
        setList({title: '',description: ''})

        create(newItem)
    }

    return(
    <div className={'messageContainer'}>
        <div className='messageForm'>
            <input
                className='inputArea'
                type="text"
                value={list.title}
                onChange={event=>setList({...list, title: event.target.value})}
                placeholder={'What you need to do'}
            />
            <input
                className='descriptionArea'
                type="text"
                value={list.description}
                onChange={event=>setList({...list, description: event.target.value})}
                placeholder={'description'}
            />

        </div>
        <button className='addButton' onClick={addNewItem}>+</button>
    </div>
    )
};

export default TodoAdd;