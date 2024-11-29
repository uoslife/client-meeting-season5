import Header from '../../components/common/Header';
import Text from '../../components/common/Text';
import { S } from './style';
import EditIcon from '../../lib/assets/images/edit-16-icon.svg';
import logout from '../../lib/assets/icon/logout.svg';
import { useLogout } from '../../hooks/api/useUser';
import useModal from '../../hooks/useModal';
import { useNavigate } from 'react-router-dom';

const EditProfilePage = () => {
  const navigate = useNavigate();
  const logoutMutation = useLogout();
  const logoutModal = useModal({
    title: '로그아웃 하시겠습니까?',
    mainButtonCallback: logoutMutation.mutate,
    mainButtonText: '로그아웃',
    isSideButton: true,
    sideButtonText: '취소',
  });
  return (
    <S.Container>
      <Header
        title="내 프로필"
        isGoBackButton={true}
        leftButtonCallback={() => {
          navigate(-1);
        }}
      />
      <S.MainContainer className="layout-padding">
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
              <img src={EditIcon} width={16} />
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
                  {`df`}
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
                  {`sdf`}
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
                  {`2d`}
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
                  {`df`}
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
                  {`df`}
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
              <img src={EditIcon} width={16} />
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
                  {`df`}
                </Text>
              </div>
              <div style={{ display: 'flex', gap: 20 }}>
                <Text
                  color={'Blue50'}
                  typograph={'bodyMediumMedium'}
                  style={{ fontWeight: 500, width: 65 }}
                >
                  학과
                </Text>
                <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                  {`sdf`}
                </Text>
              </div>
              <div style={{ display: 'flex', gap: 20 }}>
                <Text
                  color={'Blue50'}
                  typograph={'bodyMediumMedium'}
                  style={{ fontWeight: 500, width: 65 }}
                >
                  학번
                </Text>
                <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                  {`2d`}
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
                관심사
              </Text>
              <img src={EditIcon} width={16} />
            </S.TitleWrapper>
            <S.TextWrapper>
              <div style={{ display: 'flex', gap: 20 }}>
                <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                  {`df`}
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
          로그아웃 <img src={logout} />
        </S.LogoutText>
        {logoutModal.render({})}
      </S.MainContainer>
    </S.Container>
  );
};
export default EditProfilePage;
