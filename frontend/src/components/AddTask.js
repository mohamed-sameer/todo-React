import React, { useState } from 'react';

export default function AddTask(props) {
  const [taskInput, setTaskInput] = useState('');
  const handleAddTask = (e) => {
    setTaskInput(e.target.value);
  };
  const addNewTask = (e) => {
    e.preventDefault();
    props.addTask({ title: taskInput, isCompleted: false });
    setTaskInput('');
  };
  return (
    <div className="container">
      <form className="row g-3 align-items-center">
        <div className="mb-3">
          <label
            className="visually-hidden"
            htmlFor="inlineFormInputGroupUsername"
          >
            Add Task
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroupUsername"
              placeholder="Add Task"
              onChange={handleAddTask}
              value={taskInput}
            />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={addNewTask}
            >
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
