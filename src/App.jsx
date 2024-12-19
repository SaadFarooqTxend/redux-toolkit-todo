// App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store'; // Adjust path as necessary
import './App.css';
import AddTodo from './components/AddTodo'; // Ensure this component exists and works correctly
import Todos from './components/Todos';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <h1>Learn about Redux Toolkit</h1>
                <AddTodo />
                <Todos />
            </PersistGate>
        </Provider>
    );
}

export default App;
