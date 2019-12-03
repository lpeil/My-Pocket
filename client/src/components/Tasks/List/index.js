import React from 'react';

import { 
    TasksList as Wrapper, 
    TaskLine,
    TaskName,
    TaskDone,
    TaskDelete,
    TaskSubTitle
} from '../style';

const TasksList = (props) => {
    function deleteHandler(task) {
        if (window.confirm(`Tem certeza que deseja deletar "${task.title}"?`)) {
            fetch(`http://localhost:3001/tasks/${task.id}`, {
                method: 'DELETE'
            });
        }
    }

    function doneHandler(task) {
        if (window.confirm(`Tem certeza que deseja marcar "${task.title}" como feito?`)) {
            fetch(`http://localhost:3001/tasks/${task.id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    task: { done: true } 
                })
            });
        }
    }
    
    return (
        <Wrapper>
            {
                props.type ?
                (<TaskSubTitle>Finalizados</TaskSubTitle>) :
                (<TaskSubTitle>Pendentes</TaskSubTitle>)
            }
            {props.tasks.filter(task => task.done === props.type).map((element, key) => (
                <TaskLine key={key}>
                    <TaskName>{element.title}</TaskName>
                    {
                        props.type ?
                        (<></>) :
                        (<TaskDone onClick={() => doneHandler(element)} />)
                    }
                    <TaskDelete  onClick={() => deleteHandler(element)} />
                </TaskLine>
            ))}
        </Wrapper>
    )
}

export default TasksList;
