import Text from '../../common/Text';
import cardTree from '../../../lib/assets/icon/card-tree.svg';
import cardAngel from '../../../lib/assets/icon/card-angel.svg';
import cardSnow from '../../../lib/assets/icon/card-snow.svg';
import S from './style';
import { UseToastReturnType } from '../../../hooks/useToast';

export interface SummaryInfoType {
  height: string;
  age: string;
  name: string;
  gender: '여성' | '남성';
  department: string;
  studentId: string;
  appearaceType: '순함' | '또렷' | '중간';
  mbti: string;
  eyelid: '쌍커풀' | '무쌍' | '속쌍';
  course: string;
  interest: string[];
  kakaoTalkId: string;
}

interface GroupSummaryCardPropsType {
  toast: UseToastReturnType;
  userInfo: SummaryInfoType;
}

const eyelidText = (type: string) => {
  if (type === '쌍커풀') {
    return '예쁜';
  }
  if (type === '속쌍') {
    return '매력적인';
  }

  return '시크한';
};

const PersonalSummaryCard = ({
  toast,
  userInfo,
}: GroupSummaryCardPropsType) => {
  return (
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
            <S.ContentStrongText>{userInfo.department}</S.ContentStrongText>{' '}
            <S.ContentStrongText>{userInfo.studentId}학번</S.ContentStrongText>{' '}
            {userInfo.gender === '남성' ? '남학생' : '여학생'}.
          </S.ContentText>
          <S.ContentText>
            <S.ContentStrongText>만 {userInfo.age}세</S.ContentStrongText> 키는{' '}
            <S.ContentStrongText>{userInfo.height}cm</S.ContentStrongText>{' '}
            그리고 <S.ContentStrongText>{userInfo.mbti}</S.ContentStrongText>야.
          </S.ContentText>
          <S.ContentText>
            <S.ContentStrongText>{userInfo.appearaceType}</S.ContentStrongText>{' '}
            정도 인상이고
          </S.ContentText>
          <S.ContentText>
            {eyelidText(userInfo.eyelid)}{' '}
            <S.ContentStrongText>{userInfo.eyelid}</S.ContentStrongText>이
            있어👀 나의 관심사는{' '}
            <S.ContentStrongText>
              {userInfo.interest.join(',')}
            </S.ContentStrongText>
            이야.
          </S.ContentText>
          <S.ContentText>
            <S.ContentRedStrongText>
              나는 상대방과 크리스마스에
            </S.ContentRedStrongText>
          </S.ContentText>
          <S.ContentText>
            <S.ContentRedStrongText>
              {userInfo.course}을(를) 함께
            </S.ContentRedStrongText>
          </S.ContentText>
          <S.ContentText>
            <S.ContentRedStrongText>하고싶어.</S.ContentRedStrongText>
          </S.ContentText>
          <S.ContentText>우리 눈 맞을 수 있을까?☃️</S.ContentText>
        </S.ContentWrapper>
      </S.TextWrapper>

      <S.PSWrapper>
        <S.CustomText>P.S.</S.CustomText>
        <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
          이건 내 연락처야, 꼭 연락 주길 바라..!
        </Text>
        <S.CopyWrapper>
          <div style={{ display: 'flex', gap: 6 }}>
            <Text color={'Blue40'} typograph={'bodyMediumSemiBold'}>
              카톡 ID
            </Text>
            <Text color={'Blue70'} typograph={'bodyMediumSemiBold'}>
              {userInfo.kakaoTalkId}
            </Text>
          </div>
          <S.CopyButton
            onClick={() => {
              window.navigator.clipboard.writeText(userInfo.kakaoTalkId);
              toast.toast(1000);
            }}
          >
            <Text color={'Blue50'} typograph={'labelMediumMedium'}>
              복사하기
            </Text>
          </S.CopyButton>
        </S.CopyWrapper>
      </S.PSWrapper>
    </S.CardWrapper>
  );
};

export default PersonalSummaryCard;
