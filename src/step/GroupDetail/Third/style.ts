import styled from 'styled-components';

export const S = {
  FormContainer: styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  MainContainer: styled.div`
    width: 100%;
    min-height: calc(100vh - 88px - 4rem);
    min-height: calc(100dvh - 88px - 4rem);
  `,
  ButtonWrapper: styled.div`
    width: 100%;
    height: 88px;
  `,
  IndicatorBox: styled.div`
    width: 100%;
    margin: 20px 0px;
  `,
  RadioWrapper: styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    span {
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 150% */
      letter-spacing: -0.4px;
    }
  `,
};

export default S;
