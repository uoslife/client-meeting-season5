import { Outlet, useNavigate } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { accessTokenAtom } from '../../../store/accessTokenAtom';
import { useReissue } from '../../../hooks/api/useAuth';
import { useEffect } from 'react';
import { S } from '../BasicLayout/style';

const NoAuthLayout = () => {
  const navigate = useNavigate();
  const accessToken = useAtomValue(accessTokenAtom);
  const reissueMutation = useReissue();
  useEffect(() => {
    if (!accessToken) reissueMutation.mutate();
  }, []);

  if (accessToken) {
    navigate('/auth/main');
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
