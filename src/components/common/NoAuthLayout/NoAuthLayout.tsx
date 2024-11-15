import { Outlet, useNavigate } from 'react-router-dom';
import { S } from '../BasicLayout/style';
import { useAtomValue } from 'jotai';
import { accessTokenAtom } from '../../../store/accessTokenAtom';

const NoAuthLayout = () => {
  const accessToken = useAtomValue(accessTokenAtom);
  const navigate = useNavigate();
  if (accessToken) {
    navigate('/', { replace: true });
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
