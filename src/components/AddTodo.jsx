import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text && typeof text === 'string') { // Ensure it's a non-empty string
            dispatch(addTodo(text)); // Pass string to addTodo
            setText(''); // Clear input after adding
        } else {
            console.error("Cannot add an empty or invalid todo");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Add a new todo" 
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default AddTodo;
