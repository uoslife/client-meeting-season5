import styled from 'styled-components';
import { BlackScreenPropsType } from './BlackScreen';

const S = {
  BlackScreenContainer: styled.div<BlackScreenPropsType>`
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000000;
    opacity: ${(props) => (props.isOpen ? '0.4' : '0')};
    user-select: ${(props) => (props.isOpen ? 'auto' : 'none')};
    ${(props) => !props.isOpen && 'opacity:0; pointer-events: none;'}
  `,
};

export default S;
