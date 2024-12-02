import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

const S = {
  WebmailInput: styled.input`
    width: 100%;
    outline: none;
    border: none;
    padding: 1.2rem 0;
    font-size: 16px;
    color: ${COLORS.Blue90};

    &::placeholder {
      color: ${COLORS.Blue20};
    }
    font-family: Pretendard-Regular;
  `,
  UOSAdress: styled.div`
    align-items: center;
    gap: 1.2rem;
    display: flex;
    justify-content: end;
    padding: 1.2rem 0;

    text-align: end;
    top: 0;
  `,
  Wrapper: styled.div`
    width: 100%;
    height: calc(100vh - 40px);
    height: calc(100dh - 40px);
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
};

export default S;
