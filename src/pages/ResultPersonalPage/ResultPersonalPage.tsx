import { useNavigate } from 'react-router-dom';
import Text from '../../components/common/Text';
import { S } from './style';
import {
  useDeleteMeetingPersonal,
  useGetMeetingPersonalInfo,
} from '../../hooks/api/useMeetingPersonalInfo';
import { useGetUserInfo } from '../../hooks/api/useUser';
import Header from '../../components/common/Header';
import close from '../../lib/assets/icon/cancel-icon.svg';
import { errorHandler } from '../../utils/api';
import { useEffect, useState } from 'react';
import useModal from '../../hooks/useModal';
import { COLORS } from '../../lib/constants';

const ResultPersonalPage = () => {
  const navigate = useNavigate();
  const {
    data: meetingInfo,
    isError: meetingIsError,
    error: meetingError,
  } = useGetMeetingPersonalInfo();
  const deleteMutation = useDeleteMeetingPersonal();
  const {
    data: userInfo,
    isError: userIsError,
    error: userError,
  } = useGetUserInfo();
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    if (meetingIsError) {
      setErrorText(errorHandler(meetingError));
      errorModal.open();
    }
    if (userIsError) {
      setErrorText(errorHandler(userError));
      errorModal.open();
    }
  }, [meetingIsError, userIsError]);
  const modal = useModal({
    title: '미팅 신청을 취소하시겠습니까?',
    description: '이번 크리스마스도 나 홀로 집에?',
    mainButtonCallback: () => {},
    isSideButton: true,
    sideButtonText: '신청 취소하기',
    mainButtonText: '다시 생각해볼래요',
    sideButtonCallback: () => {
      deleteMutation.mutate(undefined, {
        onSuccess: () => {
          navigate('/auth/main');
        },
        onError: (error) => {
          setErrorText(errorHandler(error));
          errorModal.open();
        },
      });
    },
  });
  const errorModal = useModal({
    title: errorText,
    mainButtonCallback: () => {
      navigate('/auth/main');
    },
    isSideButton: false,
  });
  const formatMbti = (mbti: string | undefined | null) => {
    if (!mbti || mbti === '-') return '-';

    const ei = mbti.match(/[EI]+/g)?.[0] || '';
    const ns = mbti.match(/[NS]+/g)?.[0] || '';
    const tf = mbti.match(/[TF]+/g)?.[0] || '';
    const jp = mbti.match(/[JP]+/g)?.[0] || '';
    return `${ei}/${ns}/${tf}/${jp}`;
  };
  const weightType = {
    AGE: '나이',
    MBTI: 'MBTI',
    HEIGHT: '키',
    APPEARNACE: '외모',
    SMOKING: '흡연여부',
  };

  type weightKey = keyof typeof weightType;

  const userInfoList = [
    { label: 'MBTI', value: userInfo?.mbti || '-' },
    { label: '키', value: userInfo?.height + 'cm' || '-' },
    {
      label: '외모',
      value:
        userInfo?.appearanceType === 'ARAB'
          ? '또렷'
          : userInfo?.appearanceType === 'TOFU'
            ? '순한'
            : '중간',
    },
    {
      label: '흡연여부',
      value:
        userInfo?.smoking === 'E_CIGARETTE'
          ? '전자 담배'
          : userInfo?.smoking === 'CIGARETTE'
            ? '연초'
            : '비흡연',
    },
  ];

  const preferenceList = [
    {
      label: '나이',
      value: `${meetingInfo?.preference.ageMin} - ${meetingInfo?.preference.ageMax}`,
    },
    { label: 'MBTI', value: formatMbti(meetingInfo?.preference.mbti) },
    {
      label: '키',
      value: `${meetingInfo?.preference.heightMin}cm - ${meetingInfo?.preference.heightMax}cm`,
    },
    {
      label: '외모',
      value:
        (meetingInfo?.preference.appearanceType?.length
          ? meetingInfo.preference.appearanceType
              .join(',')
              .split(',')
              .map((item) =>
                item === 'ARAB' ? '또렷' : item === 'TOFU' ? '순함' : '중간',
              )
              .join(', ')
          : '상관없음') +
        ' / ' +
        (meetingInfo?.preference.eyelidType?.length
          ? meetingInfo.preference.eyelidType
              .join(',')
              .split(',')
              .map((item) =>
                item === 'DOUBLE'
                  ? '유쌍'
                  : item === 'SINGLE'
                    ? '무쌍'
                    : '속쌍',
              )
              .join(', ')
          : '상관없음'),
    },
    {
      label: '흡연여부',
      value: meetingInfo?.preference.smoking?.length
        ? meetingInfo.preference.smoking
            .join(',')
            .split(',')
            .map((item) =>
              item === 'FALSE'
                ? '비흡연'
                : item === 'CIGARETTE'
                  ? '연초'
                  : '전자 담배',
            )
            .join(', ')
        : '상관없음',
    },
  ];

  return (
    <S.MainContainer>
      <Header
        style={{ color: COLORS.Blue70 }}
        title="1대1 신청 정보"
        isGoBackButton={true}
        leftButtonCallback={() => {
          navigate('/auth/main');
        }}
      />
      <S.Container className="layout-padding">
        <S.ContentWrapper>
          <Text
            color={'Blue90'}
            typograph={'titleMedium'}
            style={{ fontWeight: 600 }}
          >
            추가 정보
          </Text>
          <S.TextWrapper>
            {userInfoList.map((info) => (
              <InfoRow key={info.label} label={info.label} value={info.value} />
            ))}
          </S.TextWrapper>
        </S.ContentWrapper>

        <S.ContentWrapper>
          <Text
            color={'Blue90'}
            typograph={'titleMedium'}
            style={{ fontWeight: 600 }}
          >
            선호 상대 조건
          </Text>
          <S.TextWrapper>
            {preferenceList.map((pref) => (
              <InfoRow key={pref.label} label={pref.label} value={pref.value} />
            ))}
          </S.TextWrapper>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <Text
            color={'Blue90'}
            typograph={'titleMedium'}
            style={{ fontWeight: 600 }}
          >
            최우선 조건
          </Text>
          <S.TextWrapper>
            {preferenceList
              .filter(
                (item) =>
                  item.label ===
                  weightType[meetingInfo?.preference.weight as weightKey],
              )

              .map((pref) => (
                <InfoRow
                  key={pref.label}
                  label={pref.label}
                  value={pref.value}
                />
              ))}
          </S.TextWrapper>
        </S.ContentWrapper>

        {meetingInfo?.preference.avoidanceDepartment && (
          <S.ContentWrapper>
            <Text
              color={'Blue90'}
              typograph={'titleMedium'}
              style={{ fontWeight: 600 }}
            >
              매칭 제외 상대
            </Text>
            <S.TextWrapper>
              <div style={{ display: 'flex', gap: 20 }}>
                <Text
                  color={'Blue50'}
                  typograph={'bodyMediumMedium'}
                  style={{ fontWeight: 500, width: 65 }}
                >
                  학과
                </Text>
                <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                  {meetingInfo?.preference.avoidanceDepartment ?? '없음'}
                </Text>
              </div>
              <div style={{ display: 'flex', gap: 20 }}>
                <Text
                  color={'Blue50'}
                  typograph={'bodyMediumMedium'}
                  style={{ fontWeight: 500, width: 65 }}
                >
                  입학년도
                </Text>
                <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                  {meetingInfo?.preference.avoidanceNumber
                    ? '20' + meetingInfo?.preference.avoidanceNumber
                    : '없음'}
                </Text>
              </div>
            </S.TextWrapper>
          </S.ContentWrapper>
        )}
        <S.ContentWrapper>
          <Text
            color={'Blue90'}
            typograph={'titleMedium'}
            style={{ fontWeight: 600 }}
          >
            미리 짜보는 데이트 코스
          </Text>
          <S.TextWrapper>
            <S.CustomText>
              나는 상대방과 크리스마스에{' '}
              <S.CustomStrongText>
                {meetingInfo?.course || '아직 정하지 않았어요'}
              </S.CustomStrongText>
              을(를) 함께하고 싶어요
            </S.CustomText>
          </S.TextWrapper>
        </S.ContentWrapper>

        <S.Text
          onClick={() => {
            modal.open();
          }}
        >
          신청 취소 <img src={close} width={14} />
        </S.Text>
      </S.Container>
      {modal.render()}
      {errorModal.render()}
    </S.MainContainer>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div style={{ display: 'flex', gap: 20 }}>
    <Text
      color={'Blue50'}
      typograph={'bodyMediumMedium'}
      style={{ fontWeight: 500, width: 65 }}
    >
      {label}
    </Text>
    <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
      {value}
    </Text>
  </div>
);

export default ResultPersonalPage;
