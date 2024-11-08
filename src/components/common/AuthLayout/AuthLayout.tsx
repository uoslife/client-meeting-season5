import { Outlet } from 'react-router-dom';
import { InnerStyle, OuterStyle } from '../BasicLayout/style';
import { useAtomValue } from 'jotai';
import { accessTokenAtom } from '../../../store/accessTokenAtom';
import { useEffect } from 'react';
import { useRefresh } from '../../../hooks/useAuth';

const AuthLayout = () => {
  const accessToken = useAtomValue(accessTokenAtom);

  const { isPending, mutate: refreshMutate } = useRefresh();

  useEffect(() => {
    if (!accessToken && !isPending) {
      refreshMutate();
    }
  }, [accessToken, isPending]);

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