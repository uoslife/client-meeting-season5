import { Outlet } from 'react-router-dom';
import { InnerStyle, OuterStyle } from './style';
const BasicLayout = () => {
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

export default BasicLayout;
