import React, { useState } from 'react';
import './TodoList.css'; // Import the CSS file

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
     
      <h1>ToDo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter your ToDo description"
      />
      <button onClick={addTodo}>Add Task</button>
      <table className="todo-list">
        <thead>
          <tr>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo}</td>
              <td>
                <button onClick={() => removeTodo(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
