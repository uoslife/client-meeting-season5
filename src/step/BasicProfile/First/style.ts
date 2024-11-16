import styled from 'styled-components';

export const S = {
  Form: styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  Container: styled.div`
    width: 100%;
    min-height: calc(100vh - 88px - 4rem);
  `,
  ButtonContainer: styled.div`
    width: 100%;
    height: 88px;
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
