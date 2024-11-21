import styled from 'styled-components';
export const S = {
  InnerStyle: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
  `,
  OuterStyle: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-left: constant(safe-area-inset-left);
    padding-right: constant(safe-area-inset-right);

    padding-bottom: env(safe-area-inset-bottom);
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
  `,
};
