import React, { useState } from 'react';
import axios from 'axios';
import useRequest from './hooks/useRequest';

function App() {
  const [todos, loading, error] = useRequest(fetchTodos)
  function fetchTodos () {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`)
  }

  if (loading) {
    return <h1>Идёт загрузка...</h1>
  }

  if (error == null) {
    return <h1>Произошла ошибка при загрузке данных</h1>
  }

  return (
    <div className="App">
        {todos && todos.map(todo => 
            <div key={todo.id} style={{padding: 30, border: '2px solid black'}}>
                {todo.id}. {todo.title}
            </div>
        )}
    </div>
  );
}

export default App;
