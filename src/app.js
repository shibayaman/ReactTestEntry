import React from 'react';
import { render } from 'react-dom';

import Todo from './components/Todo';

const App = () => (
  <Todo task="go to bed"/>
);

render(<App />, document.getElementById('root'));