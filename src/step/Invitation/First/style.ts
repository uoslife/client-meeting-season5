import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

export const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  MainContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    min-height: calc(100vh - 88px - 4rem);
  `,
  HeaderContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  `,
  BodyContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
  ContentsWrapper: styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
  `,
  ListWrapper: styled.div`
    height: 215px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  ListOption: styled.div`
    position: absolute;
    right: 50%;
    transform: translate(-50%);
    height: 220px;
    width: 0px;
    border-right: 1px dashed ${COLORS.Blue2};
    display: flex;
  `,
  Div: styled.div``,
  TextWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
  `,
  ButtonWrapper: styled.div`
    width: 100%;
    height: 88px;
  `,
};
