import React from 'react';

import { TasksList as Wrapper, TaskLine } from '../style';

const TasksList = () => {
    return (
        <Wrapper>
            <TaskLine>Teste</TaskLine>
            <TaskLine>Teste1</TaskLine>
            <TaskLine>Teste2</TaskLine>
            <TaskLine>Teste3</TaskLine>
            <TaskLine>Teste4</TaskLine>
        </Wrapper>
    )
}

export default TasksList;
