import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

const S = {
  Wrapper: styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    gap: 8px;
  `,
  Button: styled.div<{ isLeader: boolean }>`
    width: 100%;
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: ${(props) => (props.isLeader ? COLORS.Red2 : COLORS.Blue2)};
    border-radius: 12px;
    border: ${(props) =>
      props.isLeader ? `1.5px solid ${COLORS.Red60}` : `none`};
    cursor: pointer;
  `,

  TextWrapper: styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
export default S;
