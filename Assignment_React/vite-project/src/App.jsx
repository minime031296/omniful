
import React, { Suspense } from 'react';
import TaskForm from './TaskForm';



const TaskList = React.lazy(() => import('./TaskList'));

const App = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      <Suspense fallback={<div>Loading ...</div>}>
        <TaskList />
      </Suspense>
    </div>
  );
};

export default App;
