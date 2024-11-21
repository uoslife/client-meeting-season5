import S from './style';
import Button from '../../../components/common/Button';
import { useState } from 'react';
import Text from '../../../components/common/Text';
import Refresh from '../../../lib/assets/icon/refresh-icon.svg';
import { COLORS } from '../../../lib/constants';
import ApplicantItem from '../../../components/feature/ApplicantItem';
const Third = (props: {
  isTeamLeader: boolean;
  onNext: (userList: string[]) => void;
}) => {
  const [userList, _] = useState<string[]>(['우채윤', '우채윤', '우채윤']);
  return (
    <>
      <S.Container>
        <S.MainContainer>
          <S.CodeContainer>
            <Text typograph={'bodyMediumMedium'} color="Blue90">
              코드를 팅원들에게 공유해주세요.
            </Text>
            <S.CodeWrapper>
              <S.Code>4</S.Code>
              <S.Code>4</S.Code>
              <S.Code>4</S.Code>
              <S.Code>4</S.Code>
            </S.CodeWrapper>
            <S.TextWrapper>
              <Text typograph={'bodyMediumMedium'} color={'Blue40'}>
                코드 재발급
              </Text>
              <img src={Refresh} alt="refresh" />
            </S.TextWrapper>
          </S.CodeContainer>
          <S.HorizonBar />
          <S.Container className="layout-padding">
            <S.EntryListWrapper>
              <S.TextWrapperColumn>
                <Text typograph={'titleMedium'} color={'Blue90'}>
                  참여자
                </Text>
                <S.TextWrapper
                  style={{ width: '100%', justifyContent: 'flex-end' }}
                >
                  <S.Text>
                    {userList.length}
                    <span style={{ color: COLORS.Blue30 }}>/3</span>
                  </S.Text>
                  <img src={Refresh} />
                </S.TextWrapper>
              </S.TextWrapperColumn>
              {userList.map((name, id) => {
                return (
                  <ApplicantItem
                    key={`applicant-key-${id}`}
                    name={name}
                    isLeader={id === 0}
                  />
                );
              })}
            </S.EntryListWrapper>
          </S.Container>
        </S.MainContainer>
      </S.Container>
      <S.Container className="layout-padding">
        <S.ButtonWrapper>
          <Button
            buttonColor="primary"
            type="button"
            onClick={() => props.onNext(userList)}
          >
            팀 결성하기
          </Button>
        </S.ButtonWrapper>
      </S.Container>
    </>
  );
};
export default Third;
