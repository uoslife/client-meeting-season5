import { Outlet, useNavigate } from 'react-router-dom';
import { S } from '../BasicLayout/style';
import { useReissue } from '../../../hooks/api/useAuth';
import { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { accessTokenAtom } from '../../../store/accessTokenAtom';
import { useGetUserInfo } from '../../../hooks/api/useUser';

const AuthLayout = () => {
  const navigate = useNavigate();
  const accessToken = useAtomValue(accessTokenAtom);
  const reissueMutation = useReissue();
  const userInfo = useGetUserInfo();

  useEffect(() => {
    if (!accessToken)
      reissueMutation.mutate(undefined, {
        onError: () => {
          navigate('/');
        },
      });
  }, []);

  useEffect(() => {
    if (userInfo.isSuccess) {
      if (
        userInfo.data.email &&
        !userInfo.data.phoneNumber &&
        !userInfo.data.name &&
        !userInfo.data.kakaoTalkId &&
        !userInfo.data.genderType &&
        !userInfo.data.age &&
        userInfo.data.interest.length === 0
      ) {
        navigate('/auth/profile');
      } else if (
        userInfo.data.phoneNumber &&
        userInfo.data.name &&
        userInfo.data.kakaoTalkId &&
        userInfo.data.genderType &&
        userInfo.data.age &&
        userInfo.data.studentType &&
        userInfo.data.interest.length > 0
      ) {
        navigate('/auth/main');
      }
    }
  }, [userInfo]);

  return (
    <S.OuterStyle>
      <S.InnerStyle>
        <Outlet />
      </S.InnerStyle>
    </S.OuterStyle>
  );
};

export default AuthLayout;
