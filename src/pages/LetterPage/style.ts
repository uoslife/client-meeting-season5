import styled from 'styled-components';
import letterBackground from '../../lib/assets/images/letter-background.png';
import { COLORS } from '../../lib/constants';

export const S = {
  Background: styled.div`
    width: 100%;
    background-image: url(${letterBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `,
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  MainContainer: styled.div`
    width: 100%;
    // TODO
    min-height: calc(100vh - 142px - 4rem);
    min-height: calc(100dvh - 142px - 4rem);
    display: flex;
    flex-direction: column;

    align-items: center;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0px 40px 0px;
  `,
  ImgBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px 25px;
    background: ${COLORS.White};
    border-radius: 10px;
  `,
  ButtonWrapper: styled.div`
    width: 100%;
    height: 142px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 10px;
  `,
};
