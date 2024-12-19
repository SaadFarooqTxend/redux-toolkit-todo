import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: nanoid(), text: "Hello world" }] // Initial valid state
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todoText = action.payload;
            console.log("Adding todo:", todoText); // Log incoming text

            if (typeof todoText === 'string' && todoText.trim() !== '') {
                const todo = {
                    id: nanoid(),
                    text: todoText
                };
                state.todos.push(todo);
                console.log("Updated todos:", state.todos); // Log updated todos
            } else {
                console.error("Invalid todo text:", todoText); // Log invalid input
            }
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
