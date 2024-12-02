import Text from '../../common/Text';
import cardTree from '../../../lib/assets/icon/card-tree.svg';
import cardAngel from '../../../lib/assets/icon/card-angel.svg';
import cardSnow from '../../../lib/assets/icon/card-snow.svg';
import S from './style';
import { UseToastReturnType } from '../../../hooks/useToast';
import { groupUserInfoType } from '../../../pages/PersonalSummaryPage/PersonalSummaryPage';

interface GroupSummaryCardPropsType {
  toast: UseToastReturnType;
  userInfo: groupUserInfoType;
}

const GroupSummaryCard = ({ toast, userInfo }: GroupSummaryCardPropsType) => {
  return (
    userInfo && (
      <S.CardWrapper>
        <S.TextWrapper>
          <S.IconWrapper>
            <img src={cardTree} alt="tree" width={20} height={20} />
            <img src={cardAngel} alt="tree" width={20} height={20} />
            <img src={cardSnow} alt="tree" width={20} height={20} />
          </S.IconWrapper>
          <S.GradientText>{`안녕, 내 이름은 ${userInfo.name}이야!`}</S.GradientText>
          <S.ContentWrapper>
            <S.ContentText>
              나는{' '}
              <S.ContentStrongText>{userInfo.department}</S.ContentStrongText>를
              다니고 있는
            </S.ContentText>
            <S.ContentText>
              <S.ContentStrongText>
                {userInfo.studentNumber && String(userInfo.studentNumber)}
                학번 학생이야.
              </S.ContentStrongText>{' '}
            </S.ContentText>
            <S.ContentText>
              나이는
              <S.ContentStrongText>{userInfo.age}세</S.ContentStrongText> 나의
              관심사는{' '}
              <S.ContentStrongText>
                {userInfo.interest && userInfo.interest.join(',')}
              </S.ContentStrongText>
              이야.
            </S.ContentText>
            <S.ContentText>만나게 돼서 정말 반가워!</S.ContentText>
          </S.ContentWrapper>
        </S.TextWrapper>
        <S.CopyWrapper>
          <div style={{ display: 'flex', gap: 6 }}>
            <Text color={'Blue40'} typograph={'bodyMediumSemiBold'}>
              카톡 ID
            </Text>
            <Text color={'Blue70'} typograph={'bodyMediumSemiBold'}>
              {userInfo.kakaoTalkId || ''}
            </Text>
          </div>
          <S.CopyButton
            onClick={() => {
              window.navigator.clipboard.writeText(userInfo.kakaoTalkId || '');
              toast.toast(1000);
            }}
          >
            <Text color={'Blue50'} typograph={'labelMediumMedium'}>
              복사하기
            </Text>
          </S.CopyButton>
        </S.CopyWrapper>
      </S.CardWrapper>
    )
  );
};

export default GroupSummaryCard;
