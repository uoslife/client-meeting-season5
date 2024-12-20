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
import { useState } from 'react';
import { errorHandler } from '../../../utils/api';

const Sixth = (props: { context: OptionalProfileType & BaseProfileType }) => {
  const navigate = useNavigate();
  const meetingInfoMutation = useMeetingInfo();
  const userInfoMutation = usePatchUserInfo();
  const creatingMeetingMutation = useCreateMeetingTeam();
  const queryClient = useQueryClient();
  const errorToast = useToast();
  const [errorText, setErrorText] = useState('');
  const PersonDetailResultBottomSheet = useBottomSheet({
    title: '정말 신청하시겠습니까?',
    mainButtonText: '신청하기',
    mainButtonCallback: () => handleClick(),
    isSideButton: false,
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
          navigate('/auth/summary/personal');
        },
        onError: (error) => {
          setErrorText(errorHandler(error));
          errorToast.toast(1000);
        },
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
        onError: (error) => {
          setErrorText(errorHandler(error));
          errorToast.toast(1000);
        },
      },
    );
    creatingMeetingMutation.mutate(undefined, {
      onSuccess: () => {
        handleMeetingInfoMutation();
      },
      onError: () => {
        handleMeetingInfoMutation();
      },
    });
  };

  return (
    <S.Container className="layout-padding">
      {errorToast.render(errorText)}
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
                style={{ fontWeight: 500, width: 65 }}
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
                style={{ fontWeight: 500, width: 65 }}
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
                style={{ fontWeight: 500, width: 65 }}
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
                style={{ fontWeight: 500, width: 65 }}
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
                style={{ fontWeight: 500, width: 65 }}
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
                style={{ fontWeight: 500, width: 65 }}
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
                style={{ fontWeight: 500, width: 65 }}
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
                style={{ fontWeight: 500, width: 65 }}
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
                style={{ fontWeight: 500, width: 65 }}
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
                style={{ fontWeight: 500, width: 65 }}
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
                style={{ fontWeight: 500, width: 65 }}
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
                style={{ fontWeight: 500, width: 65 }}
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
            <S.CustomText>
              나는 상대방과 크리스마스에{' '}
              <S.CustomStrongText>{props.context.course}</S.CustomStrongText>
              을(를) 함께하고 싶어요
            </S.CustomText>
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
      {PersonDetailResultBottomSheet.render(
        <S.BottomSheetWrapper>
          <S.BottomSheetText>
            <S.BottomStringSheetText>{"'신청하기'"}</S.BottomStringSheetText>를
            누르면 더이상
          </S.BottomSheetText>
          <S.BottomStringSheetText>
            {'나의 추가 정보 및 상대의 이상형 정보 수정이 불가합니다. '}
          </S.BottomStringSheetText>
          <S.BottomSheetText>
            꼭 다시 한번 확인하고 수정해주세요.
          </S.BottomSheetText>
        </S.BottomSheetWrapper>,
      )}
    </S.Container>
  );
};
export default Sixth;
