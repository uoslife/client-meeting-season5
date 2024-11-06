import { Outlet } from 'react-router-dom';
import { InnerStyle, OuterStyle } from '../BasicLayout/style';

const NoAuthLayout = () => {
  // accessToken이 있는 경우 리다이렉트
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

export default NoAuthLayout;
