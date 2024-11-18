import { ReactNode } from 'react';
import { OptionalProfileType } from '../../../pages/PersonalDetailProfilePage/PersonalDetailProfilePage';
import { S } from './style';
import Indicator from '../../../components/common/Indicator';
import Button from '../../../components/common/Button';
const Second = (props: {
  onNext: ({
    targetAge,
    targetHeight,
    targetMbti,
    targetAppearanceType,
    targetSmoking,
  }: Pick<
    OptionalProfileType,
    | 'targetAge'
    | 'targetHeight'
    | 'targetMbti'
    | 'targetAppearanceType'
    | 'targetSmoking'
  >) => void;
}): ReactNode => {
  const submitHandler = async () => {
    // 여기서 hook form handlesubmit
    props.onNext({
      targetAge: 25,
      targetHeight: 165,
      targetMbti: 'ENTJ',
      targetAppearanceType: 'GOOD',
      targetSmoking: 'FALSE',
    });
  };
  return (
    <S.FormContainer className="layout-padding" onSubmit={submitHandler}>
      <S.MainContainer>
        <S.IndicatorBox>
          <Indicator depth={5} currentLevel={2} />
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
export default Second;
