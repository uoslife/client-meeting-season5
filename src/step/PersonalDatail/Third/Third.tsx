import { ReactNode } from 'react';
import { OptionalProfileType } from '../../../pages/PersonalDetailProfilePage/PersonalDetailProfilePage';
import { S } from './style';
import Indicator from '../../../components/common/Indicator';
import Button from '../../../components/common/Button';
const Third = (props: {
  onNext: ({ prefer }: Pick<OptionalProfileType, 'prefer'>) => void;
}): ReactNode => {
  const submitHandler = async () => {
    // 여기서 hook form handlesubmit
    props.onNext({ prefer: 'age' });
  };
  return (
    <S.FormContainer className="layout-padding" onSubmit={submitHandler}>
      <S.MainContainer>
        <S.IndicatorBox>
          <Indicator depth={5} currentLevel={3} />
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
export default Third;
