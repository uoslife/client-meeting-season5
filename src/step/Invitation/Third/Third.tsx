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
import Tooltip from '../../../components/common/Tooltip';
const Third = (props: {
  isTeamLeader: boolean;
  onNext: (userList: UserInfoType[] | undefined) => void;
}) => {
  const [tingCode, setTingCode] = useState<string>('');
  const createTeamMutation = useCreateMeetingTeam();
  const { data, isPending } = useGetMeetingGroupInfo();
  const queryClient = useQueryClient();
  const accessToken = useAtomValue(accessTokenAtom);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (accessToken) {
      createTeamMutation.mutate(undefined, {
        onSuccess: (data) => {
          setTingCode(data.code);
          queryClient.invalidateQueries({ queryKey: ['meetingTeamInfo'] });
        },
        onError: async () => {
          await queryClient.invalidateQueries({
            queryKey: ['meetingTeamInfo'],
          });

          if (data) setTingCode(data?.code);
          console.log(data);
        },
      });
    }
  }, [accessToken]);

  useEffect(() => {
    if (data) setTingCode(data?.code);
  }, [isPending]);

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
                      queryClient.invalidateQueries({
                        queryKey: ['meetingTeamInfo'],
                      });
                    }}
                  >
                    {data?.meetingTeamUserProfiles?.length !== 0
                      ? data?.meetingTeamUserProfiles?.length
                      : 0}
                    <span style={{ color: COLORS.Blue30 }}>/3</span>
                  </S.Text>

                  <img
                    src={Refresh}
                    onClick={async () => {
                      queryClient.invalidateQueries({
                        queryKey: ['meetingTeamInfo'],
                      });
                    }}
                  />
                  <Tooltip
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    text={`오류가 발생하면 \n새로고침 버튼을 눌러주세요.`}
                  />
                </S.TextWrapper>
              </S.TextWrapperColumn>
              {data?.meetingTeamUserProfiles &&
                data.meetingTeamUserProfiles
                  .sort((a, b) => {
                    if (a.isLeader) return -1;
                    if (b.isLeader) return 1;
                    return 0;
                  })
                  .map((user, index) => {
                    if (user) {
                      return (
                        <ApplicantItem
                          key={`applicant-key-${index}`}
                          name={user.name}
                          isLeader={user.isLeader}
                        />
                      );
                    }
                  })}
              {Array.from({
                length: 3 - (data?.meetingTeamUserProfiles?.length || 0),
              }).map((_, idx) => (
                <S.NoApplicant key={`no-applicant-key-${idx}`}>
                  <Text typograph="bodyLargeMedium" color="Blue50">
                    친구를 기다리는 중..
                  </Text>
                </S.NoApplicant>
              ))}
            </S.EntryListWrapper>
          </S.Container>
        </S.MainContainer>
      </S.Container>
      <S.Container className="layout-padding">
        <S.ButtonWrapper>
          <Button
            buttonColor="primary"
            type="button"
            onClick={() => props.onNext(data?.meetingTeamUserProfiles)}
            disabled={
              !data?.meetingTeamUserProfiles ||
              data.meetingTeamUserProfiles.length !== 3
            }
          >
            팀 결성하기
          </Button>
        </S.ButtonWrapper>
      </S.Container>
    </>
  );
};
export default Third;
