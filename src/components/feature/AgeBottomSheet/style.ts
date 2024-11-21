import styled from 'styled-components';

export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 20px;
  `,
  AppearanceItemWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    gap: 8px;
  `,
  AppearanceItem: styled.div`
    width: 100%;
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
