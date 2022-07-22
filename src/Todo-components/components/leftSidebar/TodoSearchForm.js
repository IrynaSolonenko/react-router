import {useState} from "react";
import './styles/TodoSearchForm.css'
import React from "react";

export function TodoSearchForm({filter, setFilter}){


    return(
        <div className={'searchContainer'}>
            <h1 className={'mainName'}>Todos</h1>
            <input
                type="text"
                className='searchArea'
                placeholder={'Search'}
                value={filter.query}
                onChange={event=> setFilter({...filter, query: event.target.value})}
            />
        </div>
        )
}
