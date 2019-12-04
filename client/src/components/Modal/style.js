import styled from 'styled-components';

import CloseIcon from '../../assets/icons/close.svg';

export const ModalWrapper = styled.div`
    position: absolute;
    display: none;
    justify-content: center;
    align-items: center;
    
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;

    background-color: rgba(0,0,0, 0.25);
    z-index: 100;
`

export const ModalContain = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;

    width: 90%;

    border-radius: 10px;
    background-color: #fff;
    box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.25);
`

export const CloseModal = styled.div`
    display: flex;
    width: 94%;
    justify-content: flex-end;
    padding: 10px 3%;
`

export const CloseModalIcon = styled.div`
    height: 20px;
    width: 20px;
    right: 0;

    background-image: url(${CloseIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    cursor: pointer;
`

export const ModalTitle = styled.div`
    margin-top: -10px;
    margin-bottom: 2vh;

    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: var(--color-1);
`

export const ModalContent = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    width: 100%;
    height: 100%;
    margin-bottom: 25px;
`

export const ModalButtonsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    
    width: 90%;
` 

export const ModalButtonsContain = styled.div`
    display: flex;
    justify-content: space-between;
    
    width: 60%;
`

export const ModalButton = styled.button`
    height: 30px;
    width: 45%;

    border-radius: 5px;
    border: 1px solid var(--color-1);
    background-color: var(--color-2);
    color: var(--color-1);
    font-size: 14px;

    outline: none;

    &.secondary {
        border: 1px solid var(--color-1);
        background-color: var(--color-1);
        color: #fff;
    }
`
