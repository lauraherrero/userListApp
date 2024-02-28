import { useState } from 'react';


export const AddTodo = ({ setTodos, todos }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const onNewTodo = {
      completed: false, 
      id: todos.length + 1,
      title: inputValue,
      userId: Math.floor(Math.random() * 888888) + 100000,
      
    }
    console.log(onNewTodo);

    setTodos( todos => [onNewTodo, ...todos])

    setInputValue('');
  }

  return (
    <>
      <form onSubmit={ (event) => onSubmit(event) } aria-label='form'>
      <input 
        type="text" 
        placeholder="Nuevo TODO" 
        value={inputValue}
        onChange={ onInputChange } />
        <button type='submit'>Añadir</button>
    </form>
    </>
  );
};
