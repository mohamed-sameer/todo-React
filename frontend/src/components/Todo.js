import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from './Task';
import AddTask from './AddTask';

export default function Todo(props) {
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    axios
      .get('http://localhost:5000/tasks')
      .then((response) => setTasks(response.data))
      .catch((err) => console.error(err));
  };

  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:5000/tasks/${id}`)
      .then((response) => getTasks())
      .catch((err) => console.log(err));
  };

  useEffect(() => getTasks(), []);

  const toggleTask = (id, newStatus) => {
    axios
      .put(`http://localhost:5000/tasks/${id}/${newStatus}`)
      .then((response) => getTasks())
      .catch((err) => console.log(err));
  };

  const addTask = (body) => {
    axios
      .post(`http://localhost:5000/tasks`, body)
      .then(() => getTasks())
      .catch((err) => console.log(err));
  };

  const deleteCompleted = () => {
    axios
      .delete('http://localhost:5000/tasks')
      .then((response) => getTasks())
      .catch((err) => console.log(err));
  };

  const filterTasks = (status) => {
    axios
      .get(`http://localhost:5000/tasks/filter?isCompleted=${status}`)
      .then((response) => setTasks(response.data))
      .catch((err) => console.log(err));
  };

  const task = tasks.map((task, index) => {
    return (
      <Task
        key={task._id}
        task={task}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    );
  });

  return (
    <div>
      <h1>My Tasks</h1>
      <AddTask addTask={addTask} />
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => getTasks()}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={deleteCompleted}
        >
          delete completed
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => filterTasks(true)}
        >
          completed
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => filterTasks(false)}
        >
          not completed
        </button>
      </div>
      <hr />
      {task}
    </div>
  );
}
