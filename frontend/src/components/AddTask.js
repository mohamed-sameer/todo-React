import React, { useState } from 'react';

export default function AddTask(props) {
  const [taskInput, setTaskInput] = useState('');
  const handleAddTask = (e) => {
    setTaskInput(e.target.value);
  };
  const addNewTask = () => {
    props.addTask({ title: taskInput, isCompleted: false });
  };
  return (
    <div>
      <input type="text" placeholder="Add Task" onChange={handleAddTask} />
      <input
        type="button"
        className="btn"
        value="Add Task"
        onClick={addNewTask}
      />
    </div>
  );
}
