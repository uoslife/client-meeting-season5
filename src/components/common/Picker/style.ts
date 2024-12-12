import styled from 'styled-components';
import { COLORS } from '../../../lib/constants';
export const S = {
  List: styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 100%;
    height: 240px;
    overflow-y: scroll;
    position: relative;
  `,
  ListCenter: styled.div`
    position: sticky;
    box-sizing: border-box;
    background: ${COLORS.Red2};

    top: 96px;
    border-radius: 8px;
    height: 48px;
    padding: 8px 12px;
    align-self: stretch;
    z-index: -1;
  `,
  ListItem: styled.li<{ isSelected: boolean }>`
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
