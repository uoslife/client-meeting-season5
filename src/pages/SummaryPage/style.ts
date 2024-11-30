import styled from 'styled-components';
import summaryTree from '../../lib/assets/images/summary-tree.png';
import summaryBackground from '../../lib/assets/images/summary-background.png';

export const S = {
  Background: styled.div`
    width: 100%;
    background-image: url(${summaryBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `,
  ToastWrapper: styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
  `,
  Container: styled.div`
    padding-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  MainContainer: styled.div`
    width: 100%;
    // TODO
    min-height: calc(100vh - 160px - 4rem);
    min-height: calc(100dvh - 160px - 4rem);
  `,
  ButtonWrapper: styled.div`
    position: relative;
    width: 100%;
    background-image: url(${summaryTree});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 140px;
  `,
  CardContainer: styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
};

export default S;
