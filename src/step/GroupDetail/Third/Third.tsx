import { ReactNode } from 'react';
import { FourthType } from '../../../pages/GroupDetailProfilePage/GroupDetailProfilePage';
import Indicator from '../../../components/common/Indicator';
import Button from '../../../components/common/Button';
import Text from '../../../components/common/Text';
import S from './style';

const Third = (props: {
  context: Partial<FourthType>;
  onNext: ({ mood }: { mood: string }) => void;
}): ReactNode => {
  const submitHandler = () => {
    props.onNext({ mood: '이런 분위기' });
  };

  return (
    <>
      <S.FormContainer className="layout-padding" onSubmit={submitHandler}>
        <S.MainContainer>
          <S.IndicatorBox>
            <Indicator depth={3} currentLevel={3} />
          </S.IndicatorBox>
          <Text
            color={'Blue90'}
            typograph={'headlineMedium'}
            style={{ fontWeight: 700, width: '100%', whiteSpace: 'pre-wrap' }}
          >
            {`우리가 더 즐겁고 편안하게\n놀 수 있는 분위기는?`}
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
export default Third;
