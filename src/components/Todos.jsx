import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector(state => state.todo.todos) || []; // Correctly access the todos array
    const dispatch = useDispatch();

    return (
        <>
            <div className="text-2xl font-bold mb-4">Todos</div>
            <ul className="list-none">
                {todos.length === 0 ? (
                    <li className="text-white">No todos available</li>
                ) : (
                    todos.map((todo) => (
                        <li key={todo.id} className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
                            <div className='text-white'>{todo.text}</div> {/* Ensure this accesses the string */}
                            <button onClick={() => dispatch(removeTodo(todo.id))} className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md">
                                {/* SVG icon for delete button */}
                                {/* SVG code here */}
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </>
    );
}

export default Todos;
