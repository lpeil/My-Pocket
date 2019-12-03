import styled from 'styled-components';

export const TasksWrapper = styled.div`
    width: 100%;
    margin: 2vh 0;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
`

export const TaskTitle = styled.span`
    font-size: 18px;
    color: var(--color-1);

    margin: 5px 0;
`

export const TasksList = styled.div`
    width: 90%;
    padding: 10px 5%;

    display: flex;
    flex-flow: column;

    background-color: var(--color-2);
    border-radius: 5px;
`

export const TaskLine = styled.span`
    font-size: 14px;
    color: #000;
    line-height: 30px;
`