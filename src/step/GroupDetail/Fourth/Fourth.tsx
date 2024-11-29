import Button from '../../../components/common/Button';
import Text from '../../../components/common/Text';
import { COLORS } from '../../../lib/constants';
import { FourthType } from '../../../pages/GroupDetailProfilePage/GroupDetailProfilePage';
import S from './style';
import { useNavigate } from 'react-router-dom';

const Fourth = (props: { context: FourthType }) => {
  const navigate = useNavigate();
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
              {[
                { userName: '우채윤', isTeamLeader: true },
                { userName: '우채윤', isTeamLeader: false },
                { userName: '우채윤', isTeamLeader: false },
              ].map((user) => (
                <S.UserItem key={user.userName}>
                  <Text typograph={'bodyLargeMedium'} color="Blue90">
                    {user.userName}
                  </Text>
                  {user.isTeamLeader && <S.Pill>팅장</S.Pill>}
                </S.UserItem>
              ))}
            </S.UserListContainer>
          </S.TeamUserContainer>
          <S.ContextContainer>
            <S.ContextWrapper>
              <Text typograph={'titleSmall'} color="Blue70">
                선호 상대 팅원의 나이
              </Text>
              <S.Text>
                {props.context.minAge} - {props.context.maxAge}{' '}
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
            onClick={() => {
              navigate('/auth/summary');
            }}
            disabled={false}
          >
            다음
          </Button>
        </S.ButtonWrapper>
      </S.Container>
    </>
  );
};
export default Fourth;
