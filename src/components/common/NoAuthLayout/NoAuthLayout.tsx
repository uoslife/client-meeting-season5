import { Outlet, useNavigate } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { accessTokenAtom } from '../../../store/accessTokenAtom';
import { useAuthCheck } from '../../../hooks/api/useAuth';
import { useEffect } from 'react';
import { S } from '../BasicLayout/style';

const NoAuthLayout = () => {
  const accessToken = useAtomValue(accessTokenAtom);
  const navigate = useNavigate();
  const authMutation = useAuthCheck();

  useEffect(() => {
    // authMutation.mutate();
  }, []);

  if (accessToken) {
    navigate('/auth', { replace: true });
  }

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

export default NoAuthLayout;
