import styled from 'styled-components';

import BoxIcon      from '../../assets/icons/box.svg';
import CheckIcon    from '../../assets/icons/check.svg';
import TrashIcon    from '../../assets/icons/trash.svg';

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

export const TaskSubTitle = styled.span`
    display: flex;
    justify-content: center;

    font-size: 14px;
    font-weight: bold;
    color: var(--color-1);

    margin: 5px 0;
`

export const TasksList = styled.div`
    width: 90%;
    padding: 10px 5%;
    margin: 5px 0;

    display: flex;
    flex-flow: column;

    background-color: var(--color-2);
    border-radius: 5px;
`

export const TaskLine = styled.div`
    height: 40px;
    width: 100%;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

export const TaskName = styled.span`
    font-size: 14px;
    color: #000;

    flex-grow: 4;
`

export const TaskDone = styled.div`
    width: 18px;
    height: 18px;
    margin: 0 4vw;

    background-image: url(${BoxIcon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

export const TaskDelete = styled.div`
    width: 18px;
    height: 18px
    
    background-image: url(${TrashIcon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`