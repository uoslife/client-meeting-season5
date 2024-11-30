import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';
import InviteBackground from '../../../lib/assets/images/invite-result-img.png';
export const S = {
  Background: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    background-image: url(${InviteBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `,
  FormContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  MainContainer: styled.div`
    width: 100%;
    min-height: calc(100vh - 88px);
    min-height: calc(100dvh - 88px);
  `,
  EntryContainer: styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 28px;
  `,
  EntryList: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  `,
  EntryItem: styled.div`
    display: flex;
    position: relative;
    width: 101px;
    height: 101px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: ${COLORS.Blue2};
  `,
  Pill: styled.div`
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translate(-50%, -30%);

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
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
