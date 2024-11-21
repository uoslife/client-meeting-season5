import styled from 'styled-components';

export const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;
  `,
  MbtiWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `,
  MbtiItem: styled.div`
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    algin-items: center;
  `,
};
