import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

type InputDisplayPropsType = {
  isFocused: boolean;
};

export const S = {
  FormContainer: styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  MainContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    transform: translateY(-10%);
    min-height: calc(100vh - 88px - 4rem);
    min-height: calc(100dvh - 88px - 4rem);
  `,
  ButtonWrapper: styled.div`
    width: 100%;
    height: 88px;
  `,
  IndicatorBox: styled.div`
    width: 100%;
    margin: 20px 0px;
  `,
  InputWrapper: styled.div`
    width: 100%;
    display: flex;
    height: 8.8rem;
    gap: 1.2rem;
    justify-content: center;
    align-items: center;
  `,
  Input: styled.input`
    position: absolute;
    max-width: 240px;
    padding: 0.4rem 0.8rem;
    height: 8rem;
    background: none;
    letter-spacing: 20px;
    font-size: 6.8rem;
    color: rgba(0, 0, 0, 0);
    caret-color: black;
    border: none;
    outline: none;
  `,
  InputDisplay: styled.div<InputDisplayPropsType>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.4rem;
    height: 8rem;
    padding: 0.4rem 0.8rem;
    border-bottom: 2px solid
      ${(props) => (props.isFocused ? COLORS.Blue90 : COLORS.Blue20)};
    font-weight: 600;
    font-size: 6.8rem;
    color: ${COLORS.Blue90};
  `,
};

export default S;
