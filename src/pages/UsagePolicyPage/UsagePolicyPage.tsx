import Header from '../../components/common/Header';
import Text from '../../components/common/Text';
import { S } from './style';
import arrowRightSVG from '../../lib/assets/icon/arrow-front.svg';
import PlainCheckbox from '../../components/common/PlainCheckbox';
import { useRef } from 'react';
import Button from '../../components/common/Button';
import useUsagePolicyForm from '../../hooks/useUsagePolicyForm';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const UsagePolicy = () => {
  const checkbox3 = useRef<HTMLInputElement>(null);
  const usagePolicyForm = useUsagePolicyForm();
  const navigate = useNavigate();

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

  const handleSubmit = async () => {
    await usagePolicyForm.handleSubmit();
    navigate('/webmail');
  };

  return (
    <S.Container className="layout-padding" onSubmit={handleSubmit}>
      <S.MainContainer>
        <Header title="약관 동의하기" />
        <S.PolicyHeaderWrapper>
          <Text typograph={'titleLarge'} color={'Blue90'}>
            이용 약관
          </Text>
          <S.CheckboxWrapper>
            <S.TextWrapper
              onClick={() => window.open('https://example.com/terms', '_blank')}
            >
              <Text typograph={'bodyLargeMedium'} color={'Blue90'}>
                서비스 이용 약관
              </Text>
              <img src={arrowRightSVG} alt=">" />
            </S.TextWrapper>
            <PlainCheckbox
              value="1"
              checked={checkedState.check1}
              onChange={(e) => handleCheckboxChange('check1', e.target.checked)}
            />
          </S.CheckboxWrapper>
          <S.CheckboxWrapper>
            <S.TextWrapper
              onClick={() =>
                window.open('https://example.com/privacy', '_blank')
              }
            >
              <Text typograph={'bodyLargeMedium'} color={'Blue90'}>
                개인정보 수집/이용 동의
              </Text>
              <img src={arrowRightSVG} alt=">" />
            </S.TextWrapper>
            <PlainCheckbox
              value="2"
              checked={checkedState.check2}
              onChange={(e) => handleCheckboxChange('check2', e.target.checked)}
            />
          </S.CheckboxWrapper>
        </S.PolicyHeaderWrapper>
        <Text
          typograph={'titleLarge'}
          color={'Blue90'}
          style={{ marginBottom: '8px' }}
        >
          개인정보 보안 서약
        </Text>
        <Text
          typograph={'labelMediumMedium'}
          color={'Blue70'}
          style={{ marginBottom: '16px' }}
        >
          시대팅은 서울시립대 구성원에게만 제공되는 서비스입니다.
        </Text>
        <S.SecurityWrapper
          onClick={() => {
            if (checkbox3.current) {
              checkbox3.current.checked = !checkbox3.current.checked;
              handleCheckboxChange('check3', checkbox3.current.checked);
            }
          }}
        >
          <S.ColumnWrapper>
            <Text typograph={'bodyLargeMedium'} color={'Grey190'}>
              타인에게 나의 웹메일, 카카오톡 ID,
            </Text>
            <Text typograph={'bodyLargeMedium'} color={'Grey190'}>
              전화번호를 양도하지 않겠습니다.
            </Text>
          </S.ColumnWrapper>
          <PlainCheckbox
            value="3"
            checked={checkedState.check3}
            ref={checkbox3}
            onChange={(e) => handleCheckboxChange('check3', e.target.checked)}
          />
        </S.SecurityWrapper>
      </S.MainContainer>
      <S.ButtonWrapper>
        <Button
          buttonColor="primary"
          type="submit"
          disabled={!isFormValid}
          onClick={() => {}}
        >
          다음
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default UsagePolicy;
