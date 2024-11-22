import styled from 'styled-components';
import { COLORS } from '../../lib/constants';
import StartBackground from '../../lib/assets/images/start-background-img.png';

export const S = {
  StarterPageContainer: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${COLORS.Blue2};
    width: 100%;

    background-image: url(${StartBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `,
  UpperWrapper: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
  `,
  Wrapper: styled.div`
    min-height: calc(var(--vh, 1vh) * 100);

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
  `,
  HeaderWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 40px;
    margin-bottom: 40px;
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
    width: 90vw;
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
    height: 124px;
    margin-top: 20px;
  `,
};
