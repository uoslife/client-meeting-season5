import Text from '../../components/common/Text';

import snowman from '../../lib/assets/images/main-snowman-img.png';
import snowmanIcon from '../../lib/assets/images/main-snowman-icon.png';
import { S } from './style';
import InstaIcon from '../../lib/assets/images/insta-icon.png';
import ArrowFront from '../../lib/assets/icon/arrow-front.svg';

const LoungePage = () => {
  return (
    <S.Background>
      <S.Wrapper className="layout-padding">
        <div style={{ minHeight: 'calc(100vh - 40px)' }}>
          <S.TopBar>
            <Text color={'Blue50'} typograph={'bodyMediumSemiBold'}>
              시대팅 시즌5
            </Text>
          </S.TopBar>
          <S.MainText>
            <S.GradientText>
              {`나와 함께 눈 맞을 짝은\n과연 누가 될까요?`}
              <img src={snowmanIcon} width={30} />
            </S.GradientText>
          </S.MainText>
          <S.Period>
            <Text color={'Blue90'} typograph={'bodyMediumRegular'}>
              신청기간
            </Text>
            <div style={{ display: 'flex', gap: 4 }}>
              <Text color={'Blue90'} typograph={'bodyMediumSemiBold'}>
                2024.12.7(토)
              </Text>
            </div>
          </S.Period>
          <S.ItemWrapper
            onClick={() => {
              window.open('https://www.instagram.com/uoslife_official/');
            }}
          >
            <S.ItemTextWrapper>
              <img src={InstaIcon} width={28} />
              시대생 인스타그램 바로가기
            </S.ItemTextWrapper>
            <img src={ArrowFront} />
          </S.ItemWrapper>
          <S.Snowman>
            <img src={snowman} width={312} />
          </S.Snowman>
        </div>
        <div
          style={{
            height: 40,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Text
            color={'Blue40'}
            typograph={'labelMediumMedium'}
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
            onClick={() =>
              window.open(import.meta.env.VITE_TERMS_OF_USE_LINK, '_blank')
            }
          >
            시대팅 이용약관 확인하기
          </Text>
        </div>
      </S.Wrapper>
    </S.Background>
  );
};
export default LoungePage;
