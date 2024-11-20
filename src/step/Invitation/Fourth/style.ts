import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

export const S = {
  FormContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  MainContainer: styled.div`
    width: 100%;
    min-height: calc(100vh - 88px);
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
    width: 101px;
    height: 101px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: ${COLORS.Blue2};
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
