import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import Todo from './components/Todo';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const requestTasks = async () => {
      const res = await axios.get('/api');
      const repondTasks = res.data;
      console.log(repondTasks);
    }

    requestTasks();
  });

  return <Todo task="go to bed"/>
}

render(<App />, document.getElementById('root'));