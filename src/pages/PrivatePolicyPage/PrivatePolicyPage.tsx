import { ReactNode, useRef, useState } from 'react';
import Button from '../../components/common/Button';
import PlainCheckbox from '../../components/common/PlainCheckbox';
import Text from '../../components/common/Text';
import S from './style';
import Header from '../../components/common/Header';
import { useNavigate, useSearchParams } from 'react-router-dom';

const First = (): ReactNode => {
  const navigate = useNavigate();
  const check1 = useRef<HTMLInputElement>(null);
  const check2 = useRef<HTMLInputElement>(null);
  const check3 = useRef<HTMLInputElement>(null);
  const [searchParams] = useSearchParams();
  const headerTitleType = searchParams.get('type') as 'personal' | 'group';

  const [checkedState, setCheckedState] = useState({
    check1: false,
    check2: false,
    check3: false,
  });
  const handleCheckboxChange = (name: string, value: boolean) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isFormValid =
    checkedState.check1 && checkedState.check2 && checkedState.check3;

  return (
    <>
      <Header
        title="1대1 신청하기"
        isGoBackButton={true}
        rightButtonType="close"
        leftButtonCallback={() => history.back()}
        rightButtonCallback={() => navigate('/auth/main')}
      />
      <S.FormContainer className="layout-padding">
        <S.MainContainer>
          <Text
            color={'Blue90'}
            typograph={'headlineMedium'}
            style={{ fontWeight: 700, width: '100%', whiteSpace: 'pre-wrap' }}
          >
            {`시대팅 이용 서약`}
          </Text>
          <Text
            color={'Blue70'}
            typograph={'bodyMediumMedium'}
            style={{ marginTop: 8 }}
          >
            즐거운 시대팅을 위해 약속해 주세요.
          </Text>
          <S.PolicyWrapper>
            <S.PolicyItem
              onClick={() => {
                if (check1.current) {
                  check1.current.checked = !check1.current.checked;
                  handleCheckboxChange('check1', check1.current.checked);
                }
              }}
            >
              <S.ColumnWrapper>
                <div>
                  <Text typograph={'bodyLargeMedium'} color={'Grey190'}>
                    불쾌함을 줄 수 있는 언행과 행동은
                  </Text>
                  <Text typograph={'bodyLargeMedium'} color={'Grey190'}>
                    자제해 주세요.
                  </Text>
                </div>
                <Text typograph={'labelMediumMedium'} color={'Blue50'}>
                  상대방이 불쾌함을 느낄 수 있는 말과 행동은 삼가하고, 건전한
                  분위기의 모임을 조성해 주세요. `비매너유저`로 신고될 경우,
                  시대팅 서비스 이용제한 등의 패널티가 부과될 수 있어요.
                </Text>
              </S.ColumnWrapper>
              <PlainCheckbox
                value="1"
                ref={check1}
                checked={checkedState.check1}
                onChange={(e) => {
                  handleCheckboxChange('check1', !e.target.checked);
                }}
              />
            </S.PolicyItem>
            <S.PolicyItem
              onClick={() => {
                if (check2.current) {
                  check2.current.checked = !check2.current.checked;
                  handleCheckboxChange('check2', check2.current.checked);
                }
              }}
            >
              <S.ColumnWrapper>
                <Text typograph={'bodyLargeMedium'} color={'Grey190'}>
                  노쇼는 지양해 주세요.
                </Text>
                <Text typograph={'labelMediumMedium'} color={'Blue50'}>
                  상대와의 약속 일정 및 시간을 지켜주세요. 부득이한 상황으로
                  불참 시, 상대에게 미리 양해를 구해 주세요.
                </Text>
              </S.ColumnWrapper>
              <PlainCheckbox
                value="2"
                ref={check2}
                checked={checkedState.check2}
                onChange={(e) => {
                  handleCheckboxChange('check2', !e.target.checked);
                }}
              />
            </S.PolicyItem>
            <S.PolicyItem
              onClick={() => {
                if (check3.current) {
                  check3.current.checked = !check3.current.checked;
                  handleCheckboxChange('check3', check3.current.checked);
                }
              }}
            >
              <S.ColumnWrapper>
                <Text typograph={'bodyLargeMedium'} color={'Grey190'}>
                  환불 및 매칭 관련 정책을 숙지해 주세요.
                </Text>
                <div>
                  <Text typograph={'labelMediumMedium'} color={'Blue50'}>
                    (1) 매칭 실패 시, 결제한 카드의 계좌로 환불이 진행돼요.
                  </Text>{' '}
                  <Text typograph={'labelMediumMedium'} color={'Blue50'}>
                    (2)카카오톡 ID를 검색 가능하도록 해주세요. 카카오톡 ID 검색
                    불가시 상대에게 전화번호가 제공돼요.
                  </Text>
                </div>
              </S.ColumnWrapper>
              <PlainCheckbox
                value="3"
                ref={check3}
                checked={checkedState.check3}
                onChange={(e) => {
                  handleCheckboxChange('check3', !e.target.checked);
                }}
              />
            </S.PolicyItem>
          </S.PolicyWrapper>
        </S.MainContainer>

        <S.ButtonWrapper>
          <Button
            buttonColor="primary"
            type="submit"
            onClick={() => {
              if (headerTitleType === 'personal')
                navigate('/auth/payment?type=personal');
              else navigate('/auth/payment?type=group');
            }}
            disabled={!isFormValid}
          >
            다음
          </Button>
        </S.ButtonWrapper>
      </S.FormContainer>
    </>
  );
};
export default First;
