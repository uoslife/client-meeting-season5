import Text from '../../common/Text';
import { S } from './style';

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.LeftSection>
        <Text color={'Grey40'} typograph={'labelMediumMedium'}>
          사업자번호
        </Text>
        <Text color={'Grey40'} typograph={'labelMediumMedium'}>
          대표자명
        </Text>
        <Text color={'Grey40'} typograph={'labelMediumMedium'}>
          주소
        </Text>
        <Text color={'Grey40'} typograph={'labelMediumMedium'}>
          연락처
        </Text>
      </S.LeftSection>
      <S.RightSection>
        <Text color={'Grey40'} typograph={'labelMediumMedium'}>
          111-82-69698
        </Text>
        <Text color={'Grey40'} typograph={'labelMediumMedium'}>
          한유민
        </Text>
        <Text color={'Grey40'} typograph={'labelMediumMedium'}>
          서울특별시 동대문구 망우로 18가길 43-2, 지층
        </Text>
        <Text color={'Grey40'} typograph={'labelMediumMedium'}>
          010-5748-1048
        </Text>
      </S.RightSection>
    </S.FooterWrapper>
  );
};
export default Footer;
