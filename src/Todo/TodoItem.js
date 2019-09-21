import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

function TodoItem({ todo }) {
  const { removeTodo, toggleTodo } = useContext(Context);

  const classes = [];

  if (todo.completed) {
    classes.push('done')
  }

  return (
    <li>
      <span className={classes.join(' ')}>
        <label>
          <input 
            type="checkbox" 
            className='checkbox'
            onChange={() => toggleTodo(todo.id)}
            checked={todo.completed} />
          <span />
        </label>
        <span className='text'>{todo.title}</span>
      </span>
      
      <button className="removeButton" onClick={() => removeTodo(todo.id)} />
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;
