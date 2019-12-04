import React, { useState, useRef, useEffect } from 'react';
import { TimelineLite } from 'gsap/all'

import { 
    TasksList as Wrapper, 
    TaskLine,
    TaskName,
    TaskDone,
    TaskDelete,
    TaskSubTitle,
    TaskButtonWrapper,
    TaskButton,
    TaskForm,
    TaskLabel,
    TaskLabelText,
    TaskInput,
    TaskFormButton
} from '../style';

import {
    ModalWrapper,
    ModalContain,
    CloseModal,
    CloseModalIcon,
    ModalTitle,
    ModalContent,
    ModalButtonsWrapper,
    ModalButtonsContain,
    ModalButton
} from '../../Modal/style';

const TasksList = (props) => {
    let modalContain = useRef();
    let modalWrapper = useRef();
    let [title, setTitle] = useState('');

    let [modalTitle, setModalTitle] = useState('');
    let [modalContent, setModalContent] = useState();
    let [modalResponse, setModalResponse] = useState({state: false, action: null, task: null});
    let alt = null;

    const [modalAnimation, setModalAnimation] = useState();
    const [tl] = useState(new TimelineLite({ paused: true }));

    useEffect(() => {
        setModalAnimation(
            tl
            .to(modalWrapper, 0, {css: {display: 'flex'}})
            .from(modalWrapper, 0.5, { autoAlpha: 0 })
            .from(modalContain, 0.5, { bottom: 500, autoAlpha: 0})
            .pause()
        )
    // eslint-disable-next-line
    }, []);

    const deleteHandler = (task) => {
        setModalTitle(`Deseja deletar "${task.title}"?`);
        setModalContent("buttons");
        modalAnimation.play();
        alt = modalResponse;
        alt.task = task;
        alt.action = "delete";
        setModalResponse(alt);
    }

    const doneHandler = (task) => {
        setModalTitle(`Deseja marcar "${task.title}" como finalizado?`);
        setModalContent("buttons");
        modalAnimation.play();
        alt = modalResponse;
        alt.task = task;
        alt.action = "done";
        setModalResponse(alt);
    }

    const handleButton = () => {
        if(props.type) {
            setModalTitle(`Deseja deletar todos afazeres finalizados?`);
            setModalContent("buttons");
            alt = modalResponse;
            alt.task = props.tasks;
            alt.action = "deleteAll";
            setModalResponse(alt);
            modalAnimation.play();
        } else {
            setModalTitle(`Novo afazer`);
            setModalContent("form");
            modalAnimation.play();
        }
    }

    const handleSumit = title => {
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
        modalAnimation.reverse();
        setTitle('');
    }

    const modalInfos = () => {
        if(modalContent === "buttons") {
            return (
                <ModalButtonsWrapper>
                    <ModalButtonsContain>
                        <ModalButton
                            onClick={() => {
                                alt = modalResponse;
                                alt.state = true;
                                setModalResponse(alt);
                                modalAnimation.reverse();
                            }}
                        >
                            Sim
                        </ModalButton>
                        <ModalButton 
                            className="secondary"
                            onClick={() => modalAnimation.reverse()}
                        >
                            Não
                        </ModalButton>
                    </ModalButtonsContain>
                </ModalButtonsWrapper>
            )
        } else if(modalContent === "form") {
            return (
                <TaskForm onSubmit={e => {
                    e.preventDefault();
                    handleSumit(title)
                }}>
                    <TaskLabel>
                        <TaskLabelText>Nome do Afazer</TaskLabelText>
                        <TaskInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
                    </TaskLabel>
                    <TaskFormButton type="submit">Criar</TaskFormButton>
                </TaskForm>
            )
        }
    }

    if(modalResponse.state) {
        if(modalResponse.action === "delete") {
            fetch(`http://localhost:3001/tasks/${modalResponse.task.id}`, {
                method: 'DELETE'
            });
        } else if (modalResponse.action === "done") {
            fetch(`http://localhost:3001/tasks/${modalResponse.task.id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    task: { done: true } 
                })
            });
        } else if(modalResponse.action === "deleteAll") {
            props.tasks.filter(task => task.done === props.type).forEach(val => {
                fetch(`http://localhost:3001/tasks/${val.id}`, {
                    method: 'DELETE'
                });
            })
        }
        alt = modalResponse;
        alt.action = null;
        alt.task = null;
        alt.state = false;
        setModalResponse(alt);
    }
    
    return (
        <>
            <Wrapper>
                <ModalWrapper 
                    ref={div => modalWrapper = div}
                    onClick={() => modalAnimation.reverse()}
                >
                    <ModalContain
                        ref={div => modalContain = div}
                        onClick={event => event.stopPropagation()}
                    >
                        <CloseModal><CloseModalIcon onClick={() => modalAnimation.reverse()}/></CloseModal>
                        <ModalTitle>{modalTitle}</ModalTitle>
                        <ModalContent>
                            {modalInfos()}
                        </ModalContent>
                    </ModalContain>
                </ModalWrapper>
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
            <TaskButtonWrapper>
                <TaskButton
                    onClick={() => handleButton()}
                >
                    {props.type ? (<>Deletar Finalizados</>) : (<>Novo Afazer</>)}
                </TaskButton>
            </TaskButtonWrapper>
        </>
    )
}

export default TasksList;
