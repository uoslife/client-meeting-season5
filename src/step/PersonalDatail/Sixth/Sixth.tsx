import S from './style';
import Button from '../../../components/common/Button';
import Text from '../../../components/common/Text';
import {
  BaseProfileType,
  OptionalProfileType,
} from '../../../pages/PersonalDetailProfilePage/PersonalDetailProfilePage';
import { useNavigate } from 'react-router-dom';
import {
  APPEARANCE_ENUM,
  ContextType,
  EYELID_ENUM,
  SMOKING_ENUM,
  useMeetingInfo,
} from '../../../hooks/api/useMeetingInfo';
import { useQueryClient } from '@tanstack/react-query';
import { usePatchUserInfo } from '../../../hooks/api/useUser';
import useToast from '../../../hooks/useToast';
import useBottomSheet from '../../../hooks/useBottomSheet';
import { useCreateMeetingTeam } from '../../../hooks/api/useMeetingPersonalInfo';

const Sixth = (props: { context: OptionalProfileType & BaseProfileType }) => {
  const navigate = useNavigate();
  const meetingInfoMutation = useMeetingInfo();
  const userInfoMutation = usePatchUserInfo();
  const creatingMeetingMutation = useCreateMeetingTeam();
  const queryClient = useQueryClient();
  const myErrorToast = useToast();
  const counterErrorToast = useToast();
  const PersonDetailResultBottomSheet = useBottomSheet({
    title: '신청하시겠습니까?',
    mainButtonText: '신청하기',
    mainButtonCallback: () => handleClick,
    isSideButton: false,
    description: '잘못 답변한 부분이 있다면 뒤로 돌아가서 수정해 주세요.',
  });

  const handleMeetingInfoMutation = () => {
    meetingInfoMutation.mutate(
      {
        context: props.context as ContextType,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['meetingTeamInfo', 'SINGLE'],
          });
          navigate('/auth/summary');
        },
        onError: (error) => console.log(error),
      },
    );
  };

  const parseMyAppearance = (myAppearance: string) => {
    const [left, right] = myAppearance.split('/').map((str) => str.trim());
    return [EYELID_ENUM[left], APPEARANCE_ENUM[right]];
  };

  const handleClick = () => {
    userInfoMutation.mutate(
      {
        mbti: props.context.myMbti,
        height: props.context.myHeight.slice(0, 3),
        eyelidType: parseMyAppearance(props.context.myAppearanceType)[0],
        appearanceType: parseMyAppearance(props.context.myAppearanceType)[1],
        smoking: SMOKING_ENUM[props.context.mySmoking],
      },
      {
        onError: () => {
          myErrorToast.toast(1000);
        },
      },
    );
    creatingMeetingMutation.mutate(undefined, {
      onSuccess: () => {
        handleMeetingInfoMutation();
      },
      onError: (error) => {
        handleMeetingInfoMutation();
        counterErrorToast.toast(1000);
        console.log(error);
      },
    });
  };

  return (
    <S.Container className="layout-padding">
      {myErrorToast.render('당신의 TMI를 다시 입력해주세요.')}
      {counterErrorToast.render('이상형 정보를 다시 입력해주세요.')}
      <S.MainContainer>
        <Text
          typograph={'headlineMedium'}
          color={'Blue90'}
          style={{ fontWeight: 700, width: '100%', marginTop: 20 }}
        >
          내 답변 종합
        </Text>
        <S.ContentWrapper>
          <Text
            color={'Blue90'}
            typograph={'titleMedium'}
            style={{ fontWeight: 600 }}
          >
            추가 정보
          </Text>
          <S.TextWrapper>
            <div style={{ display: 'flex', gap: 20 }}>
              <Text
                color={'Blue50'}
                typograph={'bodyMediumMedium'}
                style={{ fontWeight: 500, width: 50 }}
              >
                MBTI
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {props.context.myMbti ?? '-'}
              </Text>
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <Text
                color={'Blue50'}
                typograph={'bodyMediumMedium'}
                style={{ fontWeight: 500, width: 50 }}
              >
                키
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {props.context.myHeight ? String(props.context.myHeight) : '-'}
              </Text>
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <Text
                color={'Blue50'}
                typograph={'bodyMediumMedium'}
                style={{ fontWeight: 500, width: 50 }}
              >
                외모
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {props.context.myAppearanceType ?? '-'}
              </Text>
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <Text
                color={'Blue50'}
                typograph={'bodyMediumMedium'}
                style={{ fontWeight: 500, width: 50 }}
              >
                흡연여부
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {props.context.mySmoking ?? '-'}
              </Text>
            </div>
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
            <div style={{ display: 'flex', gap: 20 }}>
              <Text
                color={'Blue50'}
                typograph={'bodyMediumMedium'}
                style={{ fontWeight: 500, width: 50 }}
              >
                나이
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {props.context.targetAge
                  ? String(props.context.targetAge)
                  : '-'}
              </Text>
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <Text
                color={'Blue50'}
                typograph={'bodyMediumMedium'}
                style={{ fontWeight: 500, width: 50 }}
              >
                MBTI
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {props.context.targetMbti ?? '-'}
              </Text>
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <Text
                color={'Blue50'}
                typograph={'bodyMediumMedium'}
                style={{ fontWeight: 500, width: 50 }}
              >
                키
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {props.context.targetHeight
                  ? String(props.context.targetHeight)
                  : '-'}
              </Text>
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <Text
                color={'Blue50'}
                typograph={'bodyMediumMedium'}
                style={{ fontWeight: 500, width: 50 }}
              >
                외모
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {props.context.targetAppearanceType ?? '-'}
              </Text>
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <Text
                color={'Blue50'}
                typograph={'bodyMediumMedium'}
                style={{ fontWeight: 500, width: 50 }}
              >
                흡연여부
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {props.context.targetSmoking ?? '-'}
              </Text>
            </div>
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
            <div style={{ display: 'flex', gap: 20 }}>
              <Text
                color={'Blue50'}
                typograph={'bodyMediumMedium'}
                style={{ fontWeight: 500, width: 50 }}
              >
                {String(props.context.prefer)}
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {String(
                  (() => {
                    switch (props.context.prefer) {
                      case '나이':
                        return props.context.targetAge ?? '-';
                      case 'MBTI':
                        return props.context.targetMbti ?? '-';
                      case '키':
                        return props.context.targetHeight ?? '-';
                      case '외모':
                        return props.context.targetAppearanceType ?? '-';
                      case '흡연여부':
                        return props.context.targetSmoking ?? '-';
                      default:
                        return '-';
                    }
                  })(),
                )}
              </Text>
            </div>
          </S.TextWrapper>
        </S.ContentWrapper>
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
                style={{ fontWeight: 500, width: 50 }}
              >
                학과
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {props.context.avoidDepartment
                  ? String(props.context.avoidDepartment)
                  : '-'}
              </Text>
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <Text
                color={'Blue50'}
                typograph={'bodyMediumMedium'}
                style={{ fontWeight: 500, width: 50 }}
              >
                입학년도
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {props.context.avoidStudentId ?? '-'}
              </Text>
            </div>
          </S.TextWrapper>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <Text
            color={'Blue90'}
            typograph={'titleMedium'}
            style={{ fontWeight: 600 }}
          >
            미리 짜보는 데이트 코스
          </Text>
          <S.TextWrapper>
            <Text
              color={'Blue50'}
              typograph={'bodyMediumMedium'}
              style={{ fontWeight: 500 }}
            >
              {`나는 상대방과 크리스마스에
              ${props.context.course}을(를)
              함께하고 싶어요`}
            </Text>
          </S.TextWrapper>
        </S.ContentWrapper>
      </S.MainContainer>
      <S.ButtonWrapper>
        <Button
          buttonColor="primary"
          type="submit"
          onClick={() => {
            PersonDetailResultBottomSheet.open();
          }}
        >
          다음
        </Button>
      </S.ButtonWrapper>
      {PersonDetailResultBottomSheet.render(<></>)}
    </S.Container>
  );
};
export default Sixth;
