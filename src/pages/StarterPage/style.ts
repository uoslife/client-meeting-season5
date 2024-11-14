import styled from 'styled-components';

export const S = {
  StarterPageContainer: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    min-height: 100vh;
  `,
  HeaderWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
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
