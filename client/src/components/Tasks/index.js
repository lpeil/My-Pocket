import React, { useState, useEffect } from 'react';

import { TasksWrapper, TaskTitle } from './style';
import TasksList from './List';

const Tasks = () => {
    let [tasks, setTasks] = useState([]);

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

    return (
        <TasksWrapper>
            <TaskTitle>
                Afazeres
            </TaskTitle>
            <TasksList tasks={tasks} type={false} />
            <TasksList tasks={tasks} type={true} />
        </TasksWrapper>
    )
}

export default Tasks;
