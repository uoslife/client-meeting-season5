import styled from 'styled-components';
import { COLORS } from '../../lib/constants';

export const S = {
  StarterPageContainer: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: ${COLORS.Blue2};
    width: 100%;
  `,
  UpperWrapper: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 60px;

    width: 100%;
    min-height: 100vh;
  `,
  HeaderWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 40px;
  `,
  CustomTextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  `,
  CustomText: styled.div`
    color: ${COLORS.Blue50};
    text-align: center;
    font-family: 'XmasFont';
    font-size: 60px;
    font-style: normal;
    font-weight: 400;
    line-height: 56px;
  `,
  SubTitleWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 4px;
  `,
  DateWrapper: styled.div`
    display: flex;
    align-items: cetner;
    justify-content: center;
    gap: 8px;
  `,
  DateBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;
  `,
};
