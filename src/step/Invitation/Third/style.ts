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
    min-height: calc(100vh - 88px - 4rem);
  `,
  CodeContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-top: 20px;
  `,
  CodeWrapper: styled.div`
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 8px;
    background: ${COLORS.Blue2};
  `,
  TextWrapper: styled.div`
    display: flex;
    jusitfy-content: center;
    cursor: pointer;
  `,
  TextWrapperColumn: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Code: styled.div`
    text-align: center;
    font-family: Pretendard;
    font-size: 68px;
    font-style: normal;
    font-weight: 600;
    line-height: 80px;
    color: ${COLORS.Grey190};
  `,
  HorizonBar: styled.div`
    width: 100%;
    height: 4px;
    background: ${COLORS.Blue2};
    margin: 28px 0px;
  `,
  EntryListWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    algin-items: center;
    gap: 12px;
  `,
  Text: styled.p`
    color: ${COLORS.Blue90};
    text-align: right;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.4rem;
    letter-spacing: -0.4px;
  `,
  ButtonWrapper: styled.div`
    width: 100%;
    height: 88px;
  `,
  IndicatorBox: styled.div`
    width: 100%;
    margin: 20px 0px;
  `,
};

export default S;
