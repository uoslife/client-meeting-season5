import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

const S = {
  Wrapper: styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    gap: 8px;
  `,
  Button: styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    background: ${COLORS.White};
    border-radius: 12px;
    cursor: pointer;
  `,
};
export default S;
