import { useState, useEffect } from 'react';
import api from '../services/api';

interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all tasks
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const response = await api.get<Todo[]>('/tasks');
        setTodos(response as unknown as Todo[]);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch tasks:', err);
        setError('Failed to fetch tasks. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // Add new task
  const handleAddTodo = async () => {
    if (newTodo.trim() === '') return;
    
    try {
      const response = await api.post<Todo>('/tasks', { title: newTodo });
      setTodos([...todos, response as unknown as Todo]);
      setNewTodo('');
    } catch (err) {
      console.error('Failed to add task:', err);
      setError('Failed to add task. Please try again later.');
    }
  };

  // Toggle task status
  const handleToggleTodo = async (id: string) => {
    try {
      const todoToUpdate = todos.find(todo => todo._id === id);
      if (!todoToUpdate) return;

      const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };
      await api.put(`/tasks/${id}`, updatedTodo);
      
      setTodos(
        todos.map(todo => 
          todo._id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    } catch (err) {
      console.error('Failed to update task status:', err);
      setError('Failed to update task status. Please try again later.');
    }
  };

  // Delete task
  const handleDeleteTodo = async (id: string) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      console.error('Failed to delete task:', err);
      setError('Failed to delete task. Please try again later.');
    }
  };

  return (
    <div className="todos-container">
      <h1>Todo List</h1>
      
      {error && <div className="error-message">{error}</div>}
      
      <div className="add-todo">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleAddTodo();
            }
          }}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <ul className="todo-list">
          {todos.length === 0 ? (
            <li className="empty-list">No todos yet</li>
          ) : (
            todos.map(todo => (
              <li key={todo._id} className={todo.completed ? 'completed' : ''}>
                <span onClick={() => handleToggleTodo(todo._id)}>
                  {todo.completed ? '✓ ' : '○ '}
                  {todo.title}
                </span>
                <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default Todos; 