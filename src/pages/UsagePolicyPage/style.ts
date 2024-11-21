import styled from 'styled-components';
import { COLORS } from '../../lib/constants';

export const S = {
  Container: styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  MainContainer: styled.div`
    width: 100%;
    min-height: calc(100vh - 108px - 4rem);
  `,
  PolicyHeaderWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 20px;
    margin-top: 20px;
    margin-bottom: 40px;
  `,
  CheckboxWrapper: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  TextWrapperColumn: styled.div`
    display: flex;
    flex-direction: column;
  `,
  TextWrapper: styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
  `,
  SecurityWrapper: styled.div`
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
  ColumnWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,

  ButtonWrapper: styled.div`
    margin-top: 20px;
    width: 100%;
    height: 88px;
  `,
};
