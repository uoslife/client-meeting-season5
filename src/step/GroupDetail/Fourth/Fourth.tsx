import { useEffect } from 'react';
import Button from '../../../components/common/Button';
import Text from '../../../components/common/Text';
import {
  useGetMeetingGroupInfo,
  usePostGroupMeetingInfo,
} from '../../../hooks/api/useMeetingGroupInfo';
import useBottomSheet from '../../../hooks/useBottomSheet';
import { COLORS } from '../../../lib/constants';
import { UserInfoType } from '../../../lib/types/meeting';
import { FourthType } from '../../../pages/GroupDetailProfilePage/GroupDetailProfilePage';
import S from './style';
import { useAtomValue } from 'jotai';
import { accessTokenAtom } from '../../../store/accessTokenAtom';

const Fourth = (props: { context: FourthType }) => {
  const groupInfoQuery = useGetMeetingGroupInfo();
  const groupInfoMutation = usePostGroupMeetingInfo();
  const accessToken = useAtomValue(accessTokenAtom);
  useEffect(() => {
    if (accessToken) {
      groupInfoQuery.refetch();
    }
  }, [accessToken]);

  const PersonDetailResultBottomSheet = useBottomSheet({
    title: '신청하시겠습니까?',
    mainButtonText: '신청하기',
    mainButtonCallback: () => handleClick(),
    isSideButton: false,
    description: '잘못 답변한 부분이 있다면 뒤로 돌아가서 수정해 주세요.',
  });
  const handleClick = () => {
    groupInfoMutation.mutate(props.context);
  };
  return (
    <>
      <S.Container className="layout-padding">
        <S.MainContainer>
          <Text
            color={'Blue90'}
            typograph={'headlineMedium'}
            style={{ fontWeight: 700, width: '100%', margin: '20px 0px' }}
          >
            팅 답변 종합
          </Text>
          <S.TeamUserContainer>
            <S.TeamTextWrapper>
              <Text typograph={'labelMediumSemiBold'} color="Blue70">
                팅 이름
              </Text>
              <Text typograph={'titleLarge'} color="Blue90">
                {props.context.name}
              </Text>
            </S.TeamTextWrapper>
            <S.UserListContainer>
              {groupInfoQuery &&
                groupInfoQuery.data?.meetingTeamUserProfiles.map(
                  (user: UserInfoType) => (
                    <S.UserItem key={user.name}>
                      <Text typograph={'bodyLargeMedium'} color="Blue90">
                        {user.name}
                      </Text>
                      {user.isLeader && <S.Pill>팅장</S.Pill>}
                    </S.UserItem>
                  ),
                )}
            </S.UserListContainer>
          </S.TeamUserContainer>
          <S.ContextContainer>
            <S.ContextWrapper>
              <Text typograph={'titleSmall'} color="Blue70">
                선호 상대 팅원의 나이
              </Text>
              <S.Text>
                {props.context.ageMin} - {props.context.ageMax}
                <span style={{ color: COLORS.Blue30 }}>세(연)</span>
              </S.Text>
            </S.ContextWrapper>
            <S.ContextWrapper>
              <Text typograph={'titleSmall'} color="Blue70">
                선호 미팅 분위기
              </Text>
              <S.Text>
                {props.context.mood === 'CALM'
                  ? '차분하게 대화하고 싶어요.'
                  : '술 게임을 하면서 신나게 놀고 싶어요.'}
              </S.Text>
            </S.ContextWrapper>
          </S.ContextContainer>
        </S.MainContainer>

        <S.ButtonWrapper>
          <Button
            buttonColor="primary"
            type="submit"
            onClick={PersonDetailResultBottomSheet.open}
            disabled={false}
          >
            다음
          </Button>
        </S.ButtonWrapper>
        {PersonDetailResultBottomSheet.render(<></>)}
      </S.Container>
    </>
  );
};
export default Fourth;
