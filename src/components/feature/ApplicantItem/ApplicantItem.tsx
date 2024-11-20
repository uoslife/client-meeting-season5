import Text from '../../common/Text';
import { S } from './style';

interface ApplicantItemType {
  name: string;
  isLeader: boolean;
}

const ApplicantItem = ({ name, isLeader }: ApplicantItemType) => {
  return isLeader ? (
    <S.ApplicantItemWrapper>
      <S.TextWrapper>
        <Text typograph={'bodyLargeMedium'} color="Blue90">
          {name}
        </Text>

        <S.Pill>팅장</S.Pill>
      </S.TextWrapper>
      <Text typograph={'titleSmall'} color="Blue70">
        입장 완료
      </Text>
    </S.ApplicantItemWrapper>
  ) : (
    <S.ApplicantItemWrapper>
      <S.TextWrapper>
        <Text typograph={'bodyLargeMedium'} color="Blue90">
          {name}
        </Text>
      </S.TextWrapper>
      <Text typograph={'titleSmall'} color="Blue70">
        입장 완료
      </Text>
    </S.ApplicantItemWrapper>
  );
};

export default ApplicantItem;
