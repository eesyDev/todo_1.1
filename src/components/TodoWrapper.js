import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import TodoForm from './TodoForm';

uuidv4();

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
    }

  return (
    <div className='todo-wrapper'>
        <h1>Дела</h1>
        <TodoForm addTodo={addTodo}/>
        {
            todos.map((todo, index) => (
                <Todo
                    task={todo}
                    key={index}
                    toggleComplete={toggleComplete}
                />
            ))
        }
    </div>
  )
}

export default TodoWrapper