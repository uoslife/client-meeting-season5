import styled from 'styled-components';
import { COLORS } from '../../lib/constants';

export const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  MainContainer: styled.div`
    width: 100%;
    min-height: calc(100vh - 88px - 4rem);
    padding-top: 20px;
  `,
  ButtonWrapper: styled.div`
    width: 100%;
    height: 88px;
  `,
  ProductWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 12px;
    background: ${COLORS.Blue2};
  `,
  ProductItem: styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
};
