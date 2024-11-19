import S from './style';
import Button from '../../../components/common/Button';
import { FourthType } from '../../../pages/InvitationPage/InvitationPage';

const Fourth = (props: { context: FourthType }) => {
  return (
    <S.FormContainer className="layout-padding">
      <S.MainContainer></S.MainContainer>

      <S.ButtonWrapper>
        <Button buttonColor="primary" type="submit" onClick={() => {}}>
          다음
        </Button>
      </S.ButtonWrapper>
    </S.FormContainer>
  );
};
export default Fourth;
