import styled from 'styled-components';
import { COLORS } from '../../lib/constants';

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
    padding-top: 20px;
  `,
  ButtonWrapper: styled.div`
    width: 100%;
    height: 88px;
  `,
  PolicyItem: styled.div`
    width: 100%;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    border-radius: 8px;
    background: ${COLORS.Blue2};
    margin-bottom: 8px;
  `,
  PolicyWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  `,
  ColumnWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  `,
};

export default S;
