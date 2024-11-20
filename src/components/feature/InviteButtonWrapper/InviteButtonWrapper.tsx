import { SetStateAction, Dispatch } from 'react';
import Text from '../../common/Text';
import S from './style';

interface InviteButtonWrapperPropsType {
  isLeader: boolean | undefined;
  setIsLeader: Dispatch<SetStateAction<boolean | undefined>>;
}

const InviteButtonWrapper = ({
  isLeader,
  setIsLeader,
}: InviteButtonWrapperPropsType) => {
  return (
    <S.Wrapper>
      <S.Button
        onClick={() => {
          setIsLeader(true);
        }}
        isLeader={isLeader === true}
      >
        <S.TextWrapper>
          <Text
            color={isLeader === true ? 'Red60' : 'Blue90'}
            typograph="titleSmall"
            style={{ fontWeight: 600 }}
          >
            팅장하기
          </Text>
          <Text
            color={isLeader === true ? 'Red60' : 'Blue50'}
            typograph="labelMediumMedium"
            style={{ fontWeight: 600 }}
          >
            (팅 만들기)
          </Text>
        </S.TextWrapper>
      </S.Button>

      <S.Button
        onClick={() => {
          setIsLeader(false);
        }}
        isLeader={isLeader === false}
      >
        <S.TextWrapper>
          <Text
            color={isLeader === false ? 'Red60' : 'Blue90'}
            typograph="titleSmall"
            style={{ fontWeight: 600 }}
          >
            팅원하기
          </Text>
          <Text
            color={isLeader === false ? 'Red60' : 'Blue50'}
            typograph="labelMediumMedium"
          >
            (팅 참여하기)
          </Text>
        </S.TextWrapper>
      </S.Button>
    </S.Wrapper>
  );
};

export default InviteButtonWrapper;
