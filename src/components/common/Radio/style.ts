import styled from 'styled-components';

export const RadioContainer = styled.label`
    display: flex;
    position: relative;
`;

export const RadioInput = styled.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    margin: 0px;
    padding: 0px;
    z-index: 1;
    &:checked + span .unchecked {
        display: none;
    }
    &:not(:checked) + span .checked {
        display: none;
    }
`;

export const RadioButton = styled.span`
    position: relative;
    display: flex;
    width: 24px;
    height: 24px;
    & > img {
        position: absolute;
    }
`;

export const RadioLabel = styled.div`
    margin-left: 27px;
    font-size: 2rem;
`;
