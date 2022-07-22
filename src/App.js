import React from "react";
import {Routes, Route, Link} from 'react-router-dom'

import ContactsBook from './Contact-components/ContactsBook';
import Todo from './Todo-components/Todo';
import Home from './Home';
import NotFound from './NotFound';

import './App.css';


function App() {
  return (
    <div>
            <ul>
                <Link to={'/'}>Home</Link><br/>
            </ul>

        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/contacts' element={<ContactsBook />} />
            <Route path='/todo' element={<Todo />} />
            <Route path='*' element={<NotFound />} />
            </Routes>

    </div>
  );
}

export default App;
