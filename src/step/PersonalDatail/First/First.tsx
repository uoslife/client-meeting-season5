import { ReactNode } from 'react';
import { BaseProfileType } from '../../../pages/PersonalDetailProfilePage/PersonalDetailProfilePage';
import { S } from './style';
import Button from '../../../components/common/Button';
import Indicator from '../../../components/common/Indicator';
const First = (props: {
  onNext: ({
    myMbti,
    myHeight,
    myAppearanceType,
    mySmoking,
  }: BaseProfileType) => void;
}): ReactNode => {
  const submitHandler = async () => {
    // 여기서 hook form handlesubmit
    props.onNext({
      myMbti: 'ENTJ',
      myHeight: 175,
      myAppearanceType: 'GOOD',
      mySmoking: 'TRUE',
    });
  };
  return (
    <S.FormContainer className="layout-padding" onSubmit={submitHandler}>
      <S.MainContainer>
        <S.IndicatorBox>
          <Indicator depth={5} currentLevel={1} />
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
export default First;
