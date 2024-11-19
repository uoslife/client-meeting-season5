import { ReactNode } from 'react';
import { FourthType } from '../../../pages/GroupDetailProfilePage/GroupDetailProfilePage';
import Indicator from '../../../components/common/Indicator';
import Button from '../../../components/common/Button';
import Text from '../../../components/common/Text';
import S from './style';

const First = (props: {
  context: Partial<FourthType>;
  onNext: ({ name }: { name: string }) => void;
}): ReactNode => {
  const submitHandler = () => {
    props.onNext({ name: '이름' });
  };

  return (
    <>
      <S.FormContainer className="layout-padding" onSubmit={submitHandler}>
        <S.MainContainer>
          <S.IndicatorBox>
            <Indicator depth={3} currentLevel={1} />
          </S.IndicatorBox>
          <Text
            color={'Blue90'}
            typograph={'headlineMedium'}
            style={{ fontWeight: 700, width: '100%', whiteSpace: 'pre-wrap' }}
          >
            {`우리 팅 이름을 지어주세요!`}
          </Text>
          <Text
            color={'Blue70'}
            typograph={'bodyMediumMedium'}
            style={{ marginTop: 8 }}
          >
            단, 욕설 또는 불쾌감을 일으키는 이름은 자제해 주세요.
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
export default First;
