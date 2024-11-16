import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../../../components/common/Text';
import Button from '../../../components/common/Button';
import gingerman from '../../../lib/assets/images/gingerman.svg';
import S from './style';

const Fourth = (): ReactNode => {
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
            alignItems: 'center',
            gap: 8,
          }}
        >
          <Text
            color={'Blue90'}
            typograph={'headlineMedium'}
            style={{ fontWeight: 700 }}
          >
            내 프로필 완성!
          </Text>
          <Text
            color={'Blue70'}
            typograph={'bodyMediumMedium'}
            style={{ whiteSpace: 'pre-line', textAlign: 'center' }}
          >
            {`미팅 신청에 필요한 프로필을 완성했어요.\n 이제 원하는 짝을 찾으러 가볼까요 ?`}
          </Text>
        </div>
        <img src={gingerman} alt="tree" width={100} height={180} />
      </div>

      <div
        className="layout-padding"
        style={{ width: '100%', bottom: 36, position: 'absolute' }}
      >
        <Button buttonColor={'primary'} onClick={() => navigate('/auth/main')}>
          팅 신청하기
        </Button>
      </div>
    </S.Wrapper>
  );
};

export default Fourth;
