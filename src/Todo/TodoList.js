import React from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <ul>
      { props.todos.map((todo) => {
          return (
            <TodoItem 
              todo={todo} 
              key={todo.id} 
            />
          )
      })
      }
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList;
