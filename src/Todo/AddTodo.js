import React, { useState } from 'react';
import PropTypes from 'prop-types';

function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  return {
    form: {
      value,
      onChange: event => setValue(event.target.value),
      className: 'input',
      placeholder: 'Type your task here...'
    },
    clearInput: () => setValue('')
  }
}

function AddTodo({ onCreate }) {
  const input = useInputValue('');

  function submitHandler(event) {
    event.preventDefault();

    if(input.form.value.trim()) {
      onCreate(input.form.value);
      input.clearInput()
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input {...input.form} />

      <button className='submitButton' type='submit' />
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo;
