import React, { useState, useEffect } from 'react';

import { TasksWrapper, TaskTitle } from './style';
import TasksList from './List';

const Tasks = () => {
    let [tasks, setTasks] = useState([]);
    let [title, setTitle] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3001/tasks`, {
            method: "GET",
        })
        .then(response => {
            response.json().then(values => {
                setTasks(values);
            })
        })
    });

    function handleSumit(title) {
        if(title) {
            fetch(`http://localhost:3001/tasks/`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    task: { title: title, done: false}
                })
            });
        }

        setTitle('');
    }

    return (
        <TasksWrapper>
            <TaskTitle>
                Afazeres
            </TaskTitle>
            <TasksList tasks={tasks} type={false} />
            <TasksList tasks={tasks} type={true} />
            <form onSubmit={e => {
                e.preventDefault();
                handleSumit(title)
            }}>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                <input type="submit" />
            </form>
        </TasksWrapper>
    )
}

export default Tasks;
