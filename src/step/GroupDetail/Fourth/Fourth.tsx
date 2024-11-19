import { ReactNode } from 'react';
import { FourthType } from '../../../pages/GroupDetailProfilePage/GroupDetailProfilePage';
import Button from '../../../components/common/Button';
import Text from '../../../components/common/Text';
import S from './style';

const Fourth = (props: { context: Partial<FourthType> }): ReactNode => {
  return (
    <>
      <S.Container className="layout-padding">
        <S.MainContainer>
          <Text
            color={'Blue90'}
            typograph={'headlineMedium'}
            style={{ fontWeight: 700, width: '100%', marginTop: 20 }}
          >
            {`팅 답변 종합`}
          </Text>
        </S.MainContainer>

        <S.ButtonWrapper>
          <Button
            buttonColor="primary"
            type="submit"
            onClick={() => {
              console.log(props.context);
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
