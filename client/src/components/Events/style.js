import styled from 'styled-components';

import TrashIcon    from '../../assets/icons/trash.svg';

export const EventsWrapper = styled.div`
    width: 100%;
    margin: 2vh 0;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
`

export const EventsTitle = styled(Link)`
    font-size: 24px;
    font-weight: bold;
    color: var(--color-1);

    margin: 5px 0;
`

export const EventsSubTitle = styled.span`
    display: flex;
    justify-content: center;

    font-size: 14px;
    font-weight: bold;
    color: var(--color-1);

    margin: 5px 0;
`