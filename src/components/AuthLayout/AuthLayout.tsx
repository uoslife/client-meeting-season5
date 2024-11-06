import { Outlet } from 'react-router-dom';
import { InnerStyle, OuterStyle } from '../BasicLayout/style';

// accessToken이 없는 경우 리다이렉트
// 유저 정보 받아와서 리다이렉트
const AuthLayout = () => {
  return (
    <>
      <OuterStyle>
        <InnerStyle>
          <Outlet />
        </InnerStyle>
      </OuterStyle>
    </>
  );
};

export default AuthLayout;
