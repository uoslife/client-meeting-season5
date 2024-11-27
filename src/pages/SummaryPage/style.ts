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
    // top:26px;
    width: 100%;
    display: flex;
    justify-content: center;
  `,
  Container: styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  MainContainer: styled.div`
    width: 100%;
    min-height: calc(100vh - 120px - 4rem);
  `,
  ButtonWrapper: styled.div`
    background-image: url(${summaryTree});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 120px;
    padding-top: 35px;
  `,
  CardContainer: styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
};

export default S;
