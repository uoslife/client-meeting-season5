import { Outlet, useNavigate } from 'react-router-dom';
import { S } from '../BasicLayout/style';
import { useAtomValue } from 'jotai';
import { accessTokenAtom } from '../../../store/accessTokenAtom';

const NoAuthLayout = () => {
  const accessToken = useAtomValue(accessTokenAtom);
  const navigate = useNavigate();
  // refresh로 access 받는 작업 -> 실패 시 콘솔만
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
