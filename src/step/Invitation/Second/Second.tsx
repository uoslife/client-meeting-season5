import S from './style';
import Button from '../../../components/common/Button';
const Second = (props: { onNext: () => void }) => {
  return (
    <S.FormContainer className="layout-padding">
      <S.MainContainer></S.MainContainer>

      <S.ButtonWrapper>
        <Button buttonColor="primary" type="submit" onClick={props.onNext}>
          다음
        </Button>
      </S.ButtonWrapper>
    </S.FormContainer>
  );
};
export default Second;
