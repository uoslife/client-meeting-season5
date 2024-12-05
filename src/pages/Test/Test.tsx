import Text from '../../components/common/Text';
import { S } from './style';
import NoResult from '../../lib/assets/images/no-result.png';

const Test = () => {
  return (
    <S.Container className="layout-padding">
      <S.MainContainer>
        <S.Wrapper>
          <S.IconWrapper>
            <S.TextWrapper>
              <S.GradientText>
                아쉽지만, 조건에 맞는 짝을{`\n`}찾지 못했어요.
              </S.GradientText>
              <S.DescriptionWrapper>
                <Text typograph={'bodyMediumMedium'} color="Blue70">
                  하지만 다음 시즌에서는 분명
                </Text>
                <Text typograph={'bodyMediumMedium'} color="Blue70">
                  좋은 인연을 만날 수 있을 거에요!
                </Text>
              </S.DescriptionWrapper>
            </S.TextWrapper>
            <img src={NoResult} width="80%" />
          </S.IconWrapper>
        </S.Wrapper>
      </S.MainContainer>
    </S.Container>
  );
};

export default Test;
