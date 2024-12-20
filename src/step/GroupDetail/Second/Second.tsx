import { ReactNode, useState } from 'react';
import { FourthType } from '../../../pages/GroupDetailProfilePage/GroupDetailProfilePage';
import Indicator from '../../../components/common/Indicator';
import Button from '../../../components/common/Button';
import Text from '../../../components/common/Text';
import S from './style';

import AbsoluteAgeRangeSlider from '../../../components/feature/AbsoluteAgeRangeSlider';

const Second = (props: {
  context: Partial<FourthType>;
  onNext: ({ ageMin, ageMax }: { ageMin: number; ageMax: number }) => void;
}): ReactNode => {
  const [ageValue, setAgeValue] = useState<number[]>([20, 30]);

  const submitHandler = () => {
    props.onNext({ ageMin: ageValue[0], ageMax: ageValue[1] });
  };

  return (
    <>
      <S.FormContainer className="layout-padding" onSubmit={submitHandler}>
        <S.MainContainer>
          <S.IndicatorBox>
            <Indicator depth={3} currentLevel={2} />
          </S.IndicatorBox>
          <Text
            color={'Blue90'}
            typograph={'headlineMedium'}
            style={{ fontWeight: 700, width: '100%', whiteSpace: 'pre-wrap' }}
          >
            {`희망하는 상대 팅원들의\n나이를 골라주세요.`}
          </Text>

          <Text
            color={'Blue50'}
            typograph={'titleSmall'}
            style={{ fontWeight: 600, width: '100%', marginTop: 40 }}
          >
            {`연나이 ${ageValue[0]}세 ~ ${ageValue[1] === 30 ? ageValue[1] + '+' : ageValue[1]}세`}
          </Text>
          <div
            style={{
              padding: 10,
              marginTop: 20,
              display: 'flex',
              flexDirection: 'column',
              gap: 30,
            }}
          >
            <AbsoluteAgeRangeSlider value={ageValue} setValue={setAgeValue} />
          </div>
        </S.MainContainer>

        <S.ButtonWrapper>
          <Button
            buttonColor="primary"
            type="submit"
            onClick={() => {}}
            disabled={false}
          >
            다음
          </Button>
        </S.ButtonWrapper>
      </S.FormContainer>
    </>
  );
};
export default Second;
