import Header from '../../components/common/Header';
import Text from '../../components/common/Text';
import { S } from './style';
import logout from '../../lib/assets/icon/logout.svg';
import { useGetUserInfo, useLogout } from '../../hooks/api/useUser';
import useModal from '../../hooks/useModal';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const EditProfilePage = () => {
  const navigate = useNavigate();
  const logoutMutation = useLogout();
  const logoutModal = useModal({
    title: '로그아웃 하시겠습니까?',
    mainButtonCallback: () => {
      logoutMutation.mutate(undefined, { onSuccess: () => {} });
    },
    mainButtonText: '로그아웃',
    isSideButton: true,
    sideButtonText: '취소',
  });
  const userInfo = useGetUserInfo();
  const errorModal = useModal({
    isSideButton: false,
    title: '네트워크 상태가 불안정합니다.',
    mainButtonCallback: () => navigate(-1),
  });
  const editModal = useModal({
    title: '프로필을 다시 만드시겠습니까?',
    mainButtonCallback: () => navigate('/auth/profile'),
    mainButtonText: '수정하기',
    isSideButton: true,
    sideButtonText: '취소',
  });

  useEffect(() => {
    if (userInfo.isError) {
      errorModal.open();
    }
  }, [userInfo.isError]);
  return (
    <S.Container>
      {errorModal.render()}
      {editModal.render()}
      <Header
        title="내 프로필"
        isGoBackButton={true}
        leftButtonCallback={() => {
          navigate(-1);
        }}
        rightButtonType="edit"
        rightButtonCallback={() => editModal.open()}
      />
      <S.MainContainer className="layout-padding">
        {userInfo.data && userInfo.isSuccess && (
          <>
            <S.Wrapper>
              <S.ContentWrapper>
                <S.TitleWrapper>
                  <Text
                    color={'Blue90'}
                    typograph={'titleMedium'}
                    style={{ fontWeight: 600 }}
                  >
                    기본 정보
                  </Text>
                </S.TitleWrapper>
                <S.TextWrapper>
                  <div style={{ display: 'flex', gap: 20 }}>
                    <Text
                      color={'Blue50'}
                      typograph={'bodyMediumMedium'}
                      style={{ fontWeight: 500, width: 65 }}
                    >
                      이름
                    </Text>
                    <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                      {`${userInfo.data?.name}`}
                    </Text>
                  </div>
                  <div style={{ display: 'flex', gap: 20 }}>
                    <Text
                      color={'Blue50'}
                      typograph={'bodyMediumMedium'}
                      style={{ fontWeight: 500, width: 65 }}
                    >
                      성별
                    </Text>
                    <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                      {userInfo.data?.genderType == 'MALE' ? '남자' : '여자'}
                    </Text>
                  </div>
                  <div style={{ display: 'flex', gap: 20 }}>
                    <Text
                      color={'Blue50'}
                      typograph={'bodyMediumMedium'}
                      style={{ fontWeight: 500, width: 65 }}
                    >
                      나이
                    </Text>
                    <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                      {`${userInfo.data?.age}`}
                    </Text>
                  </div>
                  <div style={{ display: 'flex', gap: 20 }}>
                    <Text
                      color={'Blue50'}
                      typograph={'bodyMediumMedium'}
                      style={{ fontWeight: 500, width: 65 }}
                    >
                      전화번호
                    </Text>
                    <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                      {`${userInfo.data?.phoneNumber}`}
                    </Text>
                  </div>
                  <div style={{ display: 'flex', gap: 20 }}>
                    <Text
                      color={'Blue50'}
                      typograph={'bodyMediumMedium'}
                      style={{ fontWeight: 500, width: 65 }}
                    >
                      카카오톡 ID
                    </Text>
                    <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                      {`${userInfo.data?.kakaoTalkId}`}
                    </Text>
                  </div>
                </S.TextWrapper>
              </S.ContentWrapper>
              <S.ContentWrapper>
                <S.TitleWrapper>
                  <Text
                    color={'Blue90'}
                    typograph={'titleMedium'}
                    style={{ fontWeight: 600 }}
                  >
                    학적 정보
                  </Text>
                </S.TitleWrapper>
                <S.TextWrapper>
                  <div style={{ display: 'flex', gap: 20 }}>
                    <Text
                      color={'Blue50'}
                      typograph={'bodyMediumMedium'}
                      style={{ fontWeight: 500, width: 65 }}
                    >
                      신분
                    </Text>
                    <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                      {`${userInfo.data?.studentType === 'UNDERGRADUATE' ? '학부생' : userInfo.data?.studentType === 'POSTGRADUATE' ? '대학원생' : '졸업생'}`}
                    </Text>
                  </div>
                  {userInfo.data?.studentType === 'UNDERGRADUATE' && (
                    <div style={{ display: 'flex', gap: 20 }}>
                      <Text
                        color={'Blue50'}
                        typograph={'bodyMediumMedium'}
                        style={{ fontWeight: 500, width: 65 }}
                      >
                        학과
                      </Text>
                      <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                        {`${userInfo.data?.department}`}
                      </Text>
                    </div>
                  )}
                  {userInfo.data?.studentType === 'UNDERGRADUATE' && (
                    <div style={{ display: 'flex', gap: 20 }}>
                      <Text
                        color={'Blue50'}
                        typograph={'bodyMediumMedium'}
                        style={{ fontWeight: 500, width: 65 }}
                      >
                        학번
                      </Text>
                      <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                        {`${userInfo.data?.studentNumber}학번`}
                      </Text>
                    </div>
                  )}
                </S.TextWrapper>
              </S.ContentWrapper>
              <S.ContentWrapper>
                <S.TitleWrapper>
                  <Text
                    color={'Blue90'}
                    typograph={'titleMedium'}
                    style={{ fontWeight: 600 }}
                  >
                    관심사
                  </Text>
                </S.TitleWrapper>
                <S.TextWrapper>
                  <div style={{ display: 'flex', gap: 20 }}>
                    <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                      {`${userInfo.data?.interest.toString().replaceAll(',', ', ')}`}
                    </Text>
                  </div>
                </S.TextWrapper>
              </S.ContentWrapper>
            </S.Wrapper>
            <S.LogoutText
              onClick={() => {
                logoutModal.open();
              }}
            >
              로그아웃 <img src={logout} width={14} />
            </S.LogoutText>
          </>
        )}
        {logoutModal.render({})}
      </S.MainContainer>
    </S.Container>
  );
};
export default EditProfilePage;
