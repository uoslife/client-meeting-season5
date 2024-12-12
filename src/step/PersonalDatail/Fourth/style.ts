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
    display: flex;
    gap: 8px;
    width: 100%;
  `,
  IndicatorBox: styled.div`
    width: 100%;
    margin: 20px 0px;
  `,
  BasicProfileFirstInputWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  `,
  BottomSheet: styled.div``,
};
