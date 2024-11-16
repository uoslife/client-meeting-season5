import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: calc(100vh - 40px);
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;
    padding-top: 2rem;
  `,
  Form: styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 3.6rem;
  `,
  CodeWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.6rem;
    padding: 0 2.2rem;
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
  InputDisplay: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.4rem;
    height: 8rem;
    padding: 0.4rem 0.8rem;
    border-bottom: 2px solid ${COLORS.Blue20};
    font-weight: 600;
    font-size: 6.8rem;
    color: #1a2233;
  `,
};

export default S;
