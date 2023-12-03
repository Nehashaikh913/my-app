import React, { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, editingTodo }) => {
  const [value, setValue] = useState('');
  console.log(value)

  useEffect(() => {
    if (editingTodo) {
      setValue(editingTodo.task);
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTodo) {
      addTodo(value)
    } else {
      addTodo(value);
    }
    setValue('');
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        className='todo-input'
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder='What is the task today?'
      />
      <button type='submit' className='todo-btn'>
        {editingTodo ? 'Save Changes' : 'Add Task'}
      </button>
    </form>
  );
};

export default TodoForm;
