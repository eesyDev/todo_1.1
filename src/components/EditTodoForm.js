import React, { useState } from 'react';

const EditTodoForm = ({task, editTodo}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
    }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Запишите задачи' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>
            Обновить
        </button>
    </form>
  )
}

export default EditTodoForm;