import { Outlet, useNavigate } from 'react-router-dom';
import { S } from '../BasicLayout/style';
import { useReissue } from '../../../hooks/api/useAuth';
import { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { accessTokenAtom } from '../../../store/accessTokenAtom';
// import { useGetUserInfo } from '../../../hooks/api/useUser';
// import { userInfoAtom } from '../../../store/userInfo';

const AuthLayout = () => {
  const navigate = useNavigate();
  const accessToken = useAtomValue(accessTokenAtom);
  const reissueMutation = useReissue();
  // const userInfo = useGetUserInfo();
  // const [contextUserInfo, setContextUserInfo] = useAtom(userInfoAtom);

  useEffect(() => {
    if (!accessToken)
      reissueMutation.mutate(undefined, {
        onError: () => {
          navigate('/');
        },
      });
  }, []);

  // useEffect(() => {
  //   if (userInfo.isSuccess) {
  //     setContextUserInfo(userInfo.data);
  //     if (
  //       !(
  //         userInfo.data.phoneNumber &&
  //         userInfo.data.name &&
  //         userInfo.data.kakaoTalkId &&
  //         userInfo.data.genderType &&
  //         userInfo.data.age &&
  //         userInfo.data.interest.length > 0
  //       )
  //     )
  //       navigate('/auth/profile');
  //   }
  //   if (userInfo.isError) navigate('/');
  // }, [userInfo.isSuccess, contextUserInfo, userInfo.isError]);

  return (
    <S.OuterStyle>
      <S.InnerStyle>
        <Outlet />
      </S.InnerStyle>
    </S.OuterStyle>
  );
};

export default AuthLayout;
