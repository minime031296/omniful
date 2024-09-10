// src/components/TaskForm.js
import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { addtask } from './redux/action/action';

const TaskForm = ({ addtask }) => {
  const [taskName, setTaskName] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addtask({ id: Date.now(), name: taskName });
      setTaskName('');
    }
    inputRef.current.focus(); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

const mapDispatchToProps = {
  addtask,
};

export default connect(null, mapDispatchToProps)(TaskForm);
