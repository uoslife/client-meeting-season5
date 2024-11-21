import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

export const S = {
  Container: styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-itmes: center;
    gap: 16px;
  `,
  ContentWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-itmes: center;
    gap: 12px;
  `,
  TextWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-itmes: center;
  `,
  Capsule: styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-item: flex-start;
    border-radius: 8px;
    border: 1px solid ${COLORS.Blue20};
  `,
  TextWrapperColumn: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-itmes: center;

    gap: 5px;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    width: 36px;
    height: 23px;
    padding: 1px;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    background: #fbce01;
    border-radius: 11.5px;
  `,
  Button: styled.div`
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    border-radius: 20px;
    background: ${COLORS.White};
  `,
};
