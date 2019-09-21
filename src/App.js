import React, { useEffect } from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';
import AddTodo from './Todo/AddTodo';
import Header from './Header';

function initialState() {
  if (localStorage.getItem('todos')) {
    return JSON.parse(localStorage.getItem('todos'));
  } return [];
}

function App() {
  const [todos, setTodos] = React.useState(initialState);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          id: Date.now(),
          completed: false,
          title
        }
      ])
    )
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  return (
    <Context.Provider value={{ removeTodo, toggleTodo }}>
      <div className='wrapper'>
        <Header />

        <div className='listWrapper'>
          {todos.length ? (
              <TodoList todos={todos} />
          ) : (
              <p className='firstTodo'>Please, add your first To-Do!</p>
          )}
        </div>

        <AddTodo onCreate={addTodo} />
      </div>
    </Context.Provider>
  );
}

export default App;
