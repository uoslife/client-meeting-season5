import Text from '../Text';
import { S } from './style';

interface IndicatorPropsType {
  depth: number;
  currentLevel: number;
}

const Indicator = ({ depth, currentLevel }: IndicatorPropsType) => {
  if (depth < currentLevel - 1 || depth < 1 || currentLevel < 0) {
    return (
      <Text typograph="headlineLarge" color="Red60">
        props가 잘못 설정되었습니다.
      </Text>
    );
  }

  const arr = Array.from({ length: depth }, (_, index) =>
    index === currentLevel - 1 ? 1 : 0,
  );

  return (
    <S.IndicatorWrapper>
      {arr.map((item, index) =>
        item === 0 ? (
          <S.inactiveIndicator key={index} />
        ) : (
          <S.activeIndicator key={index} />
        ),
      )}
    </S.IndicatorWrapper>
  );
};

export default Indicator;
