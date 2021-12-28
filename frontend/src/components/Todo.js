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
    axios.delete(`http://localhost:5000/tasks/${id}`).then((response) => {
      getTasks();
    });
  };
  useEffect(() => {
    getTasks();
  }, []);

  const addTask = (body) => {
    axios
      .post(`http://localhost:5000/tasks`, body)
      .then(() => {
        console.log(body);
        getTasks();
      })
      .catch((err) => console.log(err));
  };
  const task = tasks.map((task, index) => {
    return <Task key={index} task={task} deleteTask={deleteTask} />;
  });

  return (
    <div>
      <h1>My Tasks</h1>
      <AddTask addTask={addTask} />
      <hr />
      {task}
    </div>
  );
}
