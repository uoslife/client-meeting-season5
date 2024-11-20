import styled from 'styled-components';

export const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  MainContainer: styled.div`
    width: 100%;
    min-height: calc(100vh - 108px);
    display: table;
  `,
  Wrapper: styled.div`
    display: table-cell;
    vertical-align: middle;
  `,
  IconWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    margin-bottom: 40px;
  `,
  DescriptionWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  ButtonWrapper: styled.div`
    width: 100%;
    height: 88px;
    margin-top: 20px;
  `,
};
