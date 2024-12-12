import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';

type BoxPropsType = {
  isClicked: boolean;
  type?: 'department' | 'college';
};

const S = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  TitleWrapper: styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid ${COLORS.Blue10};
  `,
  Box: styled.div<BoxPropsType>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
    border-radius: 4px;

    background: ${(props) =>
      props.isClicked && props.type === 'college' && COLORS.Blue2};
    background: ${(props) =>
      props.isClicked && props.type === 'department' && COLORS.Red2};
  `,
  ItemsWrapper: styled.div`
    display: flex;
    width: 100%;
  `,
  ItemWrapper: styled.div`
    width: 100%;
  `,
};
export default S;
