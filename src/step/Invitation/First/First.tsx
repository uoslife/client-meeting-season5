import S from './style';
import Button from '../../../components/common/Button';
const First = (props: {
  onNextSecond: () => void;
  onNextThird: () => void;
}) => {
  return (
    <S.FormContainer className="layout-padding">
      <S.MainContainer></S.MainContainer>

      <S.ButtonWrapper>
        <Button
          buttonColor="primary"
          type="submit"
          onClick={props.onNextSecond}
        >
          두번쨰로
        </Button>
        <Button buttonColor="primary" type="submit" onClick={props.onNextThird}>
          세번째로
        </Button>
      </S.ButtonWrapper>
    </S.FormContainer>
  );
};
export default First;
