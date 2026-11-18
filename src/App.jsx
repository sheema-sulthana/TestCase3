import React, { useState } from 'react';
import Task3A from './task3/Task3A/App.js';
import Task3B from './task3/Task3B/App.js';
import Task3C from './task3/Task3C/App.js';
import Task3D from './task3/Task3D/App.js';
import Task3E from './task3/Task3E/ExampleMapRenderings.js';

function App() {
  const [task, setTask] = useState('3a');
  const tasks = [
    ['3a', 'Task 3(a)'], ['3b', 'Task 3(b)'], ['3c', 'Task 3(c)'],
    ['3d', 'Task 3(d)'], ['3e', 'Task 3(e)']
  ];
  return (
    <>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        {tasks.map(([id, label]) => <button key={id} onClick={() => setTask(id)}>{label}</button>)}
      </div>
      {task === '3a' && <Task3A />}
      {task === '3b' && <Task3B />}
      {task === '3c' && <Task3C />}
      {task === '3d' && <Task3D />}
      {task === '3e' && <Task3E />}
    </>
  );
}
export default App;
