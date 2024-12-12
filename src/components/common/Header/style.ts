import styled from 'styled-components';
type WrapperPropsType = {
  justifyContent: string;
};
const S = {
  Wrapper: styled.div<WrapperPropsType>`
    width: 100%;
    display: flex;
    justify-content: ${(props) => props.justifyContent};
    align-items: center;

    height: 4rem;
    padding: 0 20px;
  `,
};
export default S;
