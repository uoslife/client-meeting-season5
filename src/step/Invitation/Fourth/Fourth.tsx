import S from './style';
import Button from '../../../components/common/Button';
import { FourthType } from '../../../pages/InvitationPage/InvitationPage';
import { useNavigate } from 'react-router-dom';

const Fourth = (props: { context: FourthType }) => {
  const navigate = useNavigate();
  return (
    <S.FormContainer className="layout-padding">
      <S.MainContainer></S.MainContainer>

      {props.context.isTeamLeader && (
        <S.ButtonWrapper>
          <Button
            buttonColor="primary"
            type="submit"
            onClick={() => {
              navigate('/auth/detail/group');
            }}
          >
            다음
          </Button>
        </S.ButtonWrapper>
      )}
    </S.FormContainer>
  );
};
export default Fourth;
