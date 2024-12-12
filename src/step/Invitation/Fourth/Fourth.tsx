import S from './style';
import Button from '../../../components/common/Button';
import { FourthType } from '../../../pages/InvitationPage/InvitationPage';
import { useNavigate } from 'react-router-dom';
import Text from '../../../components/common/Text';
import { UserInfoType } from '../../../lib/types/meeting';

const Fourth = (props: { context: FourthType }) => {
  const navigate = useNavigate();
  return (
    <S.Background>
      <S.FormContainer className="layout-padding">
        <S.MainContainer>
          <S.EntryContainer>
            <Text typograph={'headlineMedium'} color={'Blue90'}>
              팅 결성 완료!
            </Text>
            <S.EntryList>
              {props.context.userList.map((user: UserInfoType) => {
                return (
                  <S.EntryItem key={`user-${user.name}`}>
                    {user.isLeader && <S.Pill>팅장</S.Pill>}
                    <Text typograph={'bodyLargeMedium'} color={'Blue90'}>
                      {user.name}
                    </Text>
                  </S.EntryItem>
                );
              })}
            </S.EntryList>
            <S.TextWrapper>
              <Text typograph={'bodyLargeMedium'} color={'Blue90'}>
                질문의 답변과 결제는 팅장이 진행해요.
              </Text>
              <Text typograph={'bodyLargeMedium'} color={'Blue90'}>
                팅원들은 팅장을 기다려주세요.
              </Text>
            </S.TextWrapper>
          </S.EntryContainer>
        </S.MainContainer>

        {props.context.isTeamLeader && (
          <S.ButtonWrapper>
            <Button
              buttonColor="primary"
              type="submit"
              onClick={() => {
                navigate('/auth/detail/group');
              }}
            >
              다음
            </Button>
          </S.ButtonWrapper>
        )}
      </S.FormContainer>
    </S.Background>
  );
};
export default Fourth;
