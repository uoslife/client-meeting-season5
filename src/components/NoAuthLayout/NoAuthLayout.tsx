import { Outlet, useNavigate } from 'react-router-dom';
import { InnerStyle, OuterStyle } from '../BasicLayout/style';
import { useAtomValue } from 'jotai';
import { accessTokenAtom } from '../../store/accessTokenAtom';

const NoAuthLayout = () => {
  const accessToken = useAtomValue(accessTokenAtom);
  const navigate = useNavigate();
  if (accessToken) {
    navigate('/', { replace: true });
  }
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
