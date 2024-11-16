import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../../../components/common/Text';
import Button from '../../../components/common/Button';
import tree from '../../../lib/assets/icon/tree.svg';
import S from './style';

const Third = (): ReactNode => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
          alignItems: 'center',
          transform: 'translateY(-25%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          <Text color={'Blue90'} typograph={'headlineMedium'}>
            인증이 완료되었어요!
          </Text>
          <Text
            color={'Blue70'}
            typograph={'bodyMediumMedium'}
            style={{ whiteSpace: 'pre-line', textAlign: 'center' }}
          >
            {`이제 내 정보를 입력하고 프로필을\n 만들 수 있어요`}
          </Text>
        </div>
        <img src={tree} alt="tree" width={145} height={195} />
      </div>

      <div
        className="layout-padding"
        style={{ width: '100%', bottom: 36, position: 'absolute' }}
      >
        <Button
          buttonColor={'primary'}
          onClick={() => navigate('/auth/profile')}
        >
          눈 맞을 짝을 찾아 떠나볼까요?
        </Button>
      </div>
    </S.Wrapper>
  );
};

export default Third;
