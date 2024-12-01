import Text from '../../common/Text';
import cardTree from '../../../lib/assets/icon/card-tree.svg';
import cardAngel from '../../../lib/assets/icon/card-angel.svg';
import cardSnow from '../../../lib/assets/icon/card-snow.svg';
import S from './style';
import { UseToastReturnType } from '../../../hooks/useToast';
import { EyelidType } from '../../../lib/types/personalMeeting.type';
import { personalUserInfoType } from '../../../pages/PersonalSummaryPage/PersonalSummaryPage';

export interface SummaryInfoType {
  height: string;
  age: string;
  name: string;
  gender: '여성' | '남성';
  department: string;
  studentId: string;
  appearanceType: '순함' | '또렷' | '중간';
  mbti: string;
  eyelid: EyelidType;
  course: string;
  interest: string[];
  kakaoTalkId: string;
}

interface GroupSummaryCardPropsType {
  toast: UseToastReturnType;
  userInfo: personalUserInfoType;
}

const eyelidText = (type: string) => {
  if (type === 'DOUBLE') {
    return '예쁜 ';
  }
  if (type === 'INNER') {
    return '매력적인 ';
  }

  return '시크한 ';
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
            <S.ContentStrongText>
              {userInfo.department}를 다니고 있는
              <br />
            </S.ContentStrongText>
            <S.ContentStrongText>
              {userInfo.studentNumber?.toString().slice(2, 4)}학번
            </S.ContentStrongText>{' '}
            학생이야.
          </S.ContentText>
          <S.ContentText>
            나이는 <S.ContentStrongText>{userInfo.age}세</S.ContentStrongText>
            {', '}
            키는 <S.ContentStrongText>{userInfo.height}cm</S.ContentStrongText>
            {', '}
            그리고 <S.ContentStrongText>{userInfo.mbti}</S.ContentStrongText>야.
          </S.ContentText>
          <S.ContentText>
            <S.ContentStrongText>
              {userInfo.appearanceType === 'ARAB'
                ? '또렷한'
                : userInfo.appearanceType === 'TOFU'
                  ? '순한'
                  : '순함과 또렷의 중간정도의'}
            </S.ContentStrongText>{' '}
            인상이고,
          </S.ContentText>
          <S.ContentText>
            {eyelidText(userInfo.eyelid || '')}
            <S.ContentStrongText>
              {userInfo.eyelid === 'DOUBLE'
                ? '쌍커풀'
                : userInfo.eyelid === 'INNER'
                  ? '속쌍'
                  : '무쌍'}
            </S.ContentStrongText>
            이 있어👀 나의 관심사는{' '}
            <S.ContentStrongText>
              {userInfo.interest && userInfo.interest.join(',')}
            </S.ContentStrongText>
            이야.
          </S.ContentText>
          <S.ContentText>
            <S.ContentRedStrongText>
              나는 상대방과 크리스마스에 {userInfo.course}을(를) 함께 하고싶어.
            </S.ContentRedStrongText>
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
              카톡ID
            </Text>
            <Text color={'Blue70'} typograph={'bodyMediumSemiBold'}>
              {String(userInfo.kakaoTalkId)}
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
      </S.PSWrapper>
    </S.CardWrapper>
  );
};

export default PersonalSummaryCard;
