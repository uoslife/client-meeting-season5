import { Outlet, useNavigate } from 'react-router-dom';
import { S } from '../BasicLayout/style';
import { useRefresh } from '../../../hooks/api/useAuth';
import { useEffect } from 'react';

const AuthLayout = () => {
  const navigate = useNavigate();
  const authMutation = useRefresh();
  useEffect(() => {
    authMutation.mutate();
    navigate('/auth/profile');
  }, []);

  //getUserInfo
  //userInfo가 존재하지 않는 경우
  //BasicProfile로 라우팅

  //userInfo가 존재하는 경우
  //userAtom에다가 전역변수 저장
  //Main으로 라우팅

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

export default AuthLayout;
