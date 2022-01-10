import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from './Task';
import AddTask from './AddTask';
import Register from './Register';
import Login from './Login';

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

  const registerUser = (body) => {
    // for some reason broser cannot see this endpoint!
    axios
      .post('http://localhost:5000/users/register', body, {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };
  const login = (body) => {
    axios
      .post('http://localhost:5000/users/login', body)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>My Tasks</h1>
      <AddTask addTask={addTask} />
      <button onClick={() => getTasks()}>all</button>
      <button onClick={deleteCompleted}>delete completed</button>
      <button onClick={() => filterTasks(true)}>completed</button>
      <button onClick={() => filterTasks(false)}>not completed</button>
      <hr />
      {task}

      <Register registerUser={registerUser} />
      <Login login={login} />
    </div>
  );
}
