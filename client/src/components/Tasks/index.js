import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { TasksWrapper, TaskTitle } from './style';
import TasksList from './List';

const Tasks = (props) => {
    let [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`${api}/tasks`, {
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
            <TaskTitle to="/tasks">
                Afazeres
            </TaskTitle>
            <TasksList tasks={tasks} type={false} all={props.all} />
            {
                props.all ?
                (<TasksList tasks={tasks} type={true} all={props.all} />) :
                (<></>)
            }
        </TasksWrapper>
    )
}

export default Tasks;
