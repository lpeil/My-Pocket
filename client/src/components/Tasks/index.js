import React from 'react';

import { TasksWrapper, TaskTitle } from './style';
import TasksList from './List';

const Tasks = () => {
    return (
        <TasksWrapper>
            <TaskTitle>
                A Fazeres
            </TaskTitle>
            <TasksList />
        </TasksWrapper>
    )
}

export default Tasks;
