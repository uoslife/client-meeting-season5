import { ReactNode } from 'react';
import { OptionalProfileType } from '../../../pages/PersonalDetailProfilePage/PersonalDetailProfilePage';
import { useNavigate } from 'react-router-dom';
import { S } from './style';
import Indicator from '../../../components/common/Indicator';
import Button from '../../../components/common/Button';
const Fifth = (props: {
  onNext: ({ course }: Pick<OptionalProfileType, 'course'>) => void;
}): ReactNode => {
  const navigate = useNavigate();
  const submitHandler = async () => {
    // 여기서 hook form handlesubmit
    props.onNext({
      course: '드라이브',
    });
    navigate('/auth/summary');
  };

  return (
    <S.FormContainer className="layout-padding" onSubmit={submitHandler}>
      <S.MainContainer>
        <S.IndicatorBox>
          <Indicator depth={5} currentLevel={5} />
        </S.IndicatorBox>
      </S.MainContainer>

      <S.ButtonWrapper>
        <Button buttonColor="primary" type="submit" onClick={() => {}}>
          다음
        </Button>
      </S.ButtonWrapper>
    </S.FormContainer>
  );
};
export default Fifth;
