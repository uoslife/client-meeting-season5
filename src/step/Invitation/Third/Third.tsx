import S from './style';
import Button from '../../../components/common/Button';
import { useEffect, useState } from 'react';
import Text from '../../../components/common/Text';
import Refresh from '../../../lib/assets/icon/refresh-icon.svg';
import { COLORS } from '../../../lib/constants';
import ApplicantItem from '../../../components/feature/ApplicantItem';
import {
  useCreateMeetingTeam,
  useGetMeetingGroupInfo,
} from '../../../hooks/api/useMeetingGroupInfo';
import { UserInfoType } from '../../../lib/types/meeting';
import { useAtomValue } from 'jotai';
import { accessTokenAtom } from '../../../store/accessTokenAtom';
import { useQueryClient } from '@tanstack/react-query';
const Third = (props: {
  isTeamLeader: boolean;
  onNext: (userList: UserInfoType[] | undefined) => void;
}) => {
  const queryClient = useQueryClient();
  const [tingCode, setTingCode] = useState('');
  const createTeamMutation = useCreateMeetingTeam();
  const groupInfoMutation = useGetMeetingGroupInfo();
  const accessToken = useAtomValue(accessTokenAtom);
  const [userList, setUserList] = useState<UserInfoType[] | undefined>(
    groupInfoMutation.data?.meetingTeamUserProfiles,
  );

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['meetingTeamInfo', 'TRIPLE'] });
    groupInfoMutation.refetch();
  });

  useEffect(() => {
    if (accessToken) {
      createTeamMutation.mutate(undefined, {
        onSuccess: (data) => {
          setTingCode(data.code);
        },
        onError: async () => {
          // info ->
          const { data } = await groupInfoMutation.refetch();
          if (data) {
            setTingCode(data.code);
            if (data.meetingTeamUserProfiles.length !== 0) {
              setUserList(
                data.meetingTeamUserProfiles.map((user: UserInfoType) => user),
              );
            }
          }
        },
      });
    }
  }, [accessToken]);

  return (
    <>
      <S.Container>
        <S.MainContainer>
          <S.CodeContainer>
            <Text typograph={'bodyMediumMedium'} color="Blue90">
              코드를 팅원들에게 공유해주세요.
            </Text>
            <S.CodeWrapper>
              <S.Code>{tingCode}</S.Code>
            </S.CodeWrapper>
          </S.CodeContainer>
          <S.HorizonBar />
          <S.Container className="layout-padding">
            <S.EntryListWrapper>
              <S.TextWrapperColumn>
                <Text typograph={'titleMedium'} color={'Blue90'}>
                  참여자
                </Text>
                <S.TextWrapper
                  style={{ width: '100%', justifyContent: 'flex-end' }}
                >
                  <S.Text
                    onClick={async () => {
                      const data = await groupInfoMutation.refetch();
                      setUserList(data.data?.meetingTeamUserProfiles);
                    }}
                  >
                    {userList?.length !== 0 ? userList?.length : 0}
                    <span style={{ color: COLORS.Blue30 }}>/3</span>
                  </S.Text>
                  <img src={Refresh} />
                </S.TextWrapper>
              </S.TextWrapperColumn>
              {[0, 1, 2].map((index) => {
                if (userList && index < userList.length) {
                  return (
                    <ApplicantItem
                      key={`applicant-key-${index}`}
                      name={userList[index].name}
                      isLeader={userList[index].isLeader}
                    />
                  );
                }
                return (
                  <S.NoApplicant key={`no-applicant-key-${index}`}>
                    <Text typograph={'bodyLargeMedium'} color="Blue50">
                      친구를 기다리는 중..
                    </Text>
                  </S.NoApplicant>
                );
              })}
            </S.EntryListWrapper>
          </S.Container>
        </S.MainContainer>
      </S.Container>
      <S.Container className="layout-padding">
        <S.ButtonWrapper>
          <Button
            buttonColor="primary"
            type="button"
            onClick={() => props.onNext(userList)}
            disabled={!userList || userList.length !== 3}
          >
            팀 결성하기
          </Button>
        </S.ButtonWrapper>
      </S.Container>
    </>
  );
};
export default Third;
