import { Outlet } from 'react-router-dom';
import { S } from './style';
const BasicLayout = () => {
  return (
    <>
      <S.OuterStyle>
        <S.InnerStyle>
          <Outlet />
        </S.InnerStyle>
      </S.OuterStyle>
    </>
  );
};

export default BasicLayout;
