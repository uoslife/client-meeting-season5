import Text from '../../common/Text';
import { S } from './style';

const KakaoContent = () => {
  return (
    <S.Container>
      <S.ContentWrapper>
        <S.TextWrapper>
          <Text typograph={'bodyMediumRegular'} color={'Blue90'}>
            카카오톡 ID 검색을 허용해 주세요.
          </Text>
          <Text typograph={'bodyMediumRegular'} color={'Blue90'}>
            ID 검색을 미허용한 경우,
          </Text>
          <Text typograph={'bodyMediumSemiBold'} color={'Blue90'}>
            상대방에게 전화번호가 제공됩니다.
          </Text>
        </S.TextWrapper>
        <S.Capsule>
          <S.TextWrapperColumn>
            <Text typograph={'labelMediumSemiBold'} color={'Blue90'}>
              ID 검색 허용
            </Text>
            <Text typograph={'labelSmall'} color={'Blue70'}>
              상대방이 내 ID를 검색할 수 있습니다.
            </Text>
          </S.TextWrapperColumn>
          <S.ButtonWrapper>
            <S.Button />
          </S.ButtonWrapper>
        </S.Capsule>
      </S.ContentWrapper>
    </S.Container>
  );
};
export default KakaoContent;
