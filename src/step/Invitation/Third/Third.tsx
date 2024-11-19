import S from './style';
import Button from '../../../components/common/Button';
import { useState } from 'react';
const Third = (props: {
  isTeamLeader: boolean;
  onNext: (userList: string[]) => void;
}) => {
  const [userList, setUserList] = useState<string[]>(['1', '2', '3']);
  return (
    <S.FormContainer className="layout-padding">
      <S.MainContainer></S.MainContainer>

      <S.ButtonWrapper>
        <Button
          buttonColor="primary"
          type="submit"
          onClick={() => props.onNext(userList)}
        >
          다음
        </Button>
      </S.ButtonWrapper>
    </S.FormContainer>
  );
};
export default Third;
