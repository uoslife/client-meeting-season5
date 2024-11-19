import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

export const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${COLORS.Blue2};
  `,
  MainContainer: styled.div`
    width: 100%;
    min-height: calc(100vh - 88px - 4rem);
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  ButtonWrapper: styled.div`
    width: 100%;
    height: 88px;
  `,
  ContentWrapper: styled.div`
    width: 100%;
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: ${COLORS.White};
    border-radius: 12px;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
};
export default S;