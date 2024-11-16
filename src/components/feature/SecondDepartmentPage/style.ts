import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
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
  IndicatorBox: styled.div`
    width: 100%;
    margin: 20px 0px;
  `,
  TitleWrapper: styled.div`
    display: flex;
    width: 100%;

    flex-direction: column;
    padding-top: 20px;
    min-height: calc(100vh - 88px - 4rem);
  `,
  ButtonContainer: styled.div`
    width: 100%;
    height: 88px;
  `,
  BasicProfileFirstInputWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  `,
  BottomSheet: styled.div``,
};
export default S;
