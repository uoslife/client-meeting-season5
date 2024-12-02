import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

export const S = {
  FormContainer: styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  MainContainer: styled.div`
    width: 100%;
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

  Input: styled.input`
    width: 100%;
    outline: none;
    border: none;
    padding: 1.2rem 0;
    font-family: Pretendard-Regular;
    font-size: 16px;
    color: ${COLORS.Blue90};

    &::placeholder {
      color: ${COLORS.Blue20};
    }
  `,
  DeleteWrapper: styled.div`
    align-items: center;
    gap: 1.2rem;
    display: flex;
    justify-content: end;
    padding: 1.2rem 0;

    text-align: end;
    top: 0;
  `,
};

export default S;
