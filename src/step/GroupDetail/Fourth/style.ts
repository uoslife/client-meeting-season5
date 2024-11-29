import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

export const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${COLORS.Blue2};
  `,
  MainContainer: styled.div`
    width: 100%;
    min-height: calc(100vh - 88px - 4rem);
  `,
  TeamUserContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;
  `,
  TeamTextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  UserListContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  UserItem: styled.div`
    position: relative;
    padding: 20px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: ${COLORS.White};
  `,
  Pill: styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);

    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.3px;
    padding: 0px 6px;
    display: flex;
    padding: 1px 6px;
    justify-content: center;
    align-items: center;
    background: ${COLORS.Red60};
    color: ${COLORS.White};
    border-radius: 20px;
  `,
  ContextContainer: styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
  `,
  ContextWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;

    background: ${COLORS.White};
    padding: 16px 20px;
  `,
  Text: styled.div`
    color: ${COLORS.Blue90}

    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.45px;
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
