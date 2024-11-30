import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../../../components/common/Text';
import Button from '../../../components/common/Button';
import { S } from './style';
import BasicImg from '../../../lib/assets/images/basic-result-img.png';
import { FourthType } from '../../../pages/BasicProfilePage/BasicProfilePage';
import { usePatchUser, usePatchUserInfo } from '../../../hooks/api/useUser';

const Fourth = (props: { context: FourthType }): ReactNode => {
  const userInfoMutation = usePatchUserInfo();
  const userMutation = usePatchUser();
  const navigate = useNavigate();

  const STUDENT_TYPE_ENUM: {
    [key: string]: 'UNDERGRADUATE' | 'POSTGRADUATE' | 'GRADUATE';
  } = {
    학부생: 'UNDERGRADUATE',
    대학원생: 'POSTGRADUATE',
    졸업생: 'GRADUATE',
  };

  useEffect(() => {
    userMutation.mutate(
      {
        name: props.context.name,
        genderType: props.context.genderType,
        phoneNumber: props.context.phoneNumber,
        kakaoTalkId: props.context.kakaoTalkId,
      },
      {
        onError: () => {
          navigate('/auth/profile');
        },
      },
      //TODO
    );
    userInfoMutation.mutate(
      {
        studentType:
          STUDENT_TYPE_ENUM[
            props.context.studentType as
              | 'UNDERGRADUATE'
              | 'POSTGRADUATE'
              | 'GRADUATE'
          ],
        age: String(props.context.age),
        department: props.context.department,
        studentNumber: props.context.studentId,
        interest: props.context.interest,
      },
      {
        onError: () => {
          navigate('/auth/profile');
        },
      },
    );
  }, []);

  const nextButtonCallback = () => {
    navigate('/auth/main', { replace: true });
  };

  return (
    <S.Container className="layout-padding">
      <S.MainContainer>
        <S.Wrapper>
          <S.IconWrapper>
            <S.TextWrapper>
              <Text typograph={'headlineMedium'} color="Blue90">
                내 프로필 완성!
              </Text>
              <S.DescriptionWrapper>
                <Text typograph={'bodyMediumMedium'} color="Blue70">
                  미팅 신청에 필요한 프로필을 완성했어요.
                </Text>
                <Text typograph={'bodyMediumMedium'} color="Blue70">
                  이제 원하는 짝을 찾으러 가볼까요 ?
                </Text>
              </S.DescriptionWrapper>
            </S.TextWrapper>
            <img src={BasicImg} width="180" />
          </S.IconWrapper>
        </S.Wrapper>
      </S.MainContainer>
      <S.ButtonWrapper>
        <Button buttonColor={'primary'} onClick={nextButtonCallback}>
          눈 맞을 짝을 찾아 떠나볼까요?
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default Fourth;
