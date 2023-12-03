import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { nanoid } from 'nanoid';
import Todo from './Todo';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  const addTodo = (todo) => {
    const newTodo = {
      id: nanoid(),
      task: todo,
      completed: false
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditingTodo(todoToEdit);
  };

  return (
    <div className='TodoWrapper'>
      <h2>Get Things Done!</h2>
      <TodoForm addTodo={addTodo} editingTodo={editingTodo} />
      {todos.map((item, index) => (
        <Todo
          task={item}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={() => editTodo(item.id)}
          key={index}
        />
      ))}
    </div>
  );
};

export default TodoWrapper;
