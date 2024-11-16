import styled from 'styled-components';

const S = {
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
  RadioWrapper: styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 40;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;
    padding-top: 2rem;
  `,
  ButtonContainer: styled.div`
    width: 100%;
    height: 88px;
  `,
};

export default S;
