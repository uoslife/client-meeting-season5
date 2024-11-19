import S from './style';
import Button from '../../../components/common/Button';
import Text from '../../../components/common/Text';
import { OptionalProfileType } from '../../../pages/PersonalDetailProfilePage/PersonalDetailProfilePage';
import { COLORS } from '../../../lib/constants';
import { useNavigate } from 'react-router-dom';

const Sixth = (props: { context: OptionalProfileType }) => {
  const navigate = useNavigate();
  return (
    <S.Container className="layout-padding">
      <S.MainContainer>
        <Text
          typograph={'headlineMedium'}
          color={'Blue90'}
          style={{ fontWeight: 700, width: '100%', marginTop: 20 }}
        >
          내 답변 종합
        </Text>
        <S.ContentWrapper>
          <Text
            color={'Blue90'}
            typograph={'titleMedium'}
            style={{ fontWeight: 600 }}
          >
            추가 정보
          </Text>
          <S.TextWrapper>
            <div style={{ display: 'flex', gap: 20 }}>
              <Text
                color={'Blue50'}
                typograph={'bodyMediumMedium'}
                style={{ fontWeight: 500 }}
              >
                MBTI
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {props.context.targetMbti ?? '-'}
              </Text>
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <Text
                color={'Blue50'}
                typograph={'bodyMediumMedium'}
                style={{ fontWeight: 500 }}
              >
                키
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {props.context.targetHeight
                  ? String(props.context.targetHeight)
                  : '-'}
              </Text>
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <Text
                color={'Blue50'}
                typograph={'bodyMediumMedium'}
                style={{ fontWeight: 500 }}
              >
                외모
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {props.context.targetAppearanceType ?? '-'}
              </Text>
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <Text
                color={'Blue50'}
                typograph={'bodyMediumMedium'}
                style={{ fontWeight: 500 }}
              >
                흡연여부
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {props.context.targetSmoking ?? '-'}
              </Text>
            </div>
          </S.TextWrapper>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <Text
            color={'Blue90'}
            typograph={'titleMedium'}
            style={{ fontWeight: 600 }}
          >
            선호 상대 조건
          </Text>
          <S.TextWrapper>
            <div style={{ display: 'flex', gap: 20 }}>
              <Text
                color={'Blue50'}
                typograph={'bodyMediumMedium'}
                style={{ fontWeight: 500 }}
              >
                나이
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {props.context.targetAge
                  ? String(props.context.targetAge)
                  : '-'}
              </Text>
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <Text
                color={'Blue50'}
                typograph={'bodyMediumMedium'}
                style={{ fontWeight: 500 }}
              >
                MBTI
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {props.context.targetMbti ?? '-'}
              </Text>
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <Text
                color={'Blue50'}
                typograph={'bodyMediumMedium'}
                style={{ fontWeight: 500 }}
              >
                키
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {props.context.targetHeight
                  ? String(props.context.targetHeight)
                  : '-'}
              </Text>
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <Text
                color={'Blue50'}
                typograph={'bodyMediumMedium'}
                style={{ fontWeight: 500 }}
              >
                외모
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {props.context.targetAppearanceType ?? '-'}
              </Text>
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <Text
                color={'Blue50'}
                typograph={'bodyMediumMedium'}
                style={{ fontWeight: 500 }}
              >
                흡연여부
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {props.context.targetSmoking ?? '-'}
              </Text>
            </div>
          </S.TextWrapper>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <Text
            color={'Blue90'}
            typograph={'titleMedium'}
            style={{ fontWeight: 600 }}
          >
            최우선 조건
          </Text>
          <S.TextWrapper>
            <div style={{ display: 'flex', gap: 20 }}>
              <Text
                color={'Blue50'}
                typograph={'bodyMediumMedium'}
                style={{ fontWeight: 500 }}
              >
                {String(props.context.prefer)}
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {String(
                  (() => {
                    switch (props.context.prefer) {
                      case '나이':
                        return props.context.targetAge ?? '-';
                      case 'MBTI':
                        return props.context.targetMbti ?? '-';
                      case '키':
                        return props.context.targetHeight ?? '-';
                      case '외모':
                        return props.context.targetAppearanceType ?? '-';
                      case '흡연여부':
                        return props.context.targetSmoking ?? '-';
                      default:
                        return '-';
                    }
                  })(),
                )}
              </Text>
            </div>
          </S.TextWrapper>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <Text
            color={'Blue90'}
            typograph={'titleMedium'}
            style={{ fontWeight: 600 }}
          >
            매칭 제외 상대
          </Text>
          <S.TextWrapper>
            <div style={{ display: 'flex', gap: 20 }}>
              <Text
                color={'Blue50'}
                typograph={'bodyMediumMedium'}
                style={{ fontWeight: 500 }}
              >
                학과
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {props.context.targetAge
                  ? String(props.context.avoidStudentId)
                  : '-'}
              </Text>
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <Text
                color={'Blue50'}
                typograph={'bodyMediumMedium'}
                style={{ fontWeight: 500 }}
              >
                입학년도
              </Text>
              <Text color={'Blue90'} typograph={'bodyMediumMedium'}>
                {props.context.avoidStudentId ?? '-'}
              </Text>
            </div>
          </S.TextWrapper>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <Text
            color={'Blue90'}
            typograph={'titleMedium'}
            style={{ fontWeight: 600 }}
          >
            미리 짜보는 데이트 코스
          </Text>
          <S.TextWrapper>
            <Text
              color={'Blue50'}
              typograph={'bodyMediumMedium'}
              style={{ fontWeight: 500 }}
            >
              나는 상대방과 크리스마스에{' '}
              <span style={{ color: COLORS.Red60 }}>
                {props.context.course}을(를)
              </span>
              함께하고 싶어요
            </Text>
          </S.TextWrapper>
        </S.ContentWrapper>
      </S.MainContainer>
      <S.ButtonWrapper>
        <Button
          buttonColor="primary"
          type="submit"
          onClick={() => {
            //context post requset
            console.log(props.context);
            navigate('/auth/summary');
          }}
        >
          다음
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};
export default Sixth;
