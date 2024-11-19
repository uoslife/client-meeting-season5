import { ReactNode } from 'react';
import { FourthType } from '../../../pages/GroupDetailProfilePage/GroupDetailProfilePage';
import Indicator from '../../../components/common/Indicator';
import Button from '../../../components/common/Button';
import Text from '../../../components/common/Text';
import S from './style';

const Second = (props: {
  context: Partial<FourthType>;
  onNext: ({ minAge, maxAge }: { minAge: number; maxAge: number }) => void;
}): ReactNode => {
  const submitHandler = () => {
    props.onNext({ minAge: 20, maxAge: 30 });
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
