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
  const check3 = useRef<HTMLInputElement>(null);
  const check4 = useRef<HTMLInputElement>(null);
  const usagePolicyForm = useUsagePolicyForm();
  const navigate = useNavigate();

  const [checkedState, setCheckedState] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  });

  const handleCheckboxChange = (name: string, value: boolean) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isFormValid =
    checkedState.check1 &&
    checkedState.check2 &&
    checkedState.check3 &&
    checkedState.check4;

  const handleSubmit = async () => {
    await usagePolicyForm.handleSubmit();
    navigate('/webmail');
  };

  return (
    <S.Container onSubmit={handleSubmit}>
      <Header title="약관 동의하기" />
      <S.MainContainer className="layout-padding">
        <S.PolicyHeaderWrapper>
          <Text typograph={'titleLarge'} color={'Blue90'}>
            이용 약관
          </Text>
          <S.CheckboxWrapper>
            <S.TextWrapper
              onClick={() =>
                window.open(import.meta.env.VITE_TERMS_OF_USE_LINK, '_blank')
              }
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
                window.open(
                  import.meta.env.VITE_AGGREMENT_ON_PERSONAL_INFO_LINK,
                  '_blank',
                )
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
        <S.TextWrapperColumn>
          <Text typograph={'labelMediumMedium'} color={'Blue70'}>
            시대팅은 서울시립대 구성원에게만 제공되는 서비스입니다.
          </Text>
          <Text typograph={'labelMediumMedium'} color={'Blue70'}>
            웹메일, 카카오톡 ID 및 전화번호를 타인에게 양도하거나 도용 및
          </Text>
          <Text
            typograph={'labelMediumMedium'}
            color={'Blue70'}
            style={{ marginBottom: '16px' }}
          >
            대여하는 경우, 서비스 이용에 제재 또는 불이익을 받을 수 있습니다.
          </Text>
        </S.TextWrapperColumn>
        <S.SecurityWrapper
          onClick={() => {
            if (check3.current) {
              check3.current.checked = !check3.current.checked;
              handleCheckboxChange('check3', check3.current.checked);
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
            ref={check3}
            onChange={(e) => {
              handleCheckboxChange('check3', !e.target.checked);
              console.log(e.target.checked);
            }}
          />
        </S.SecurityWrapper>
        <S.SecurityWrapper
          onClick={() => {
            if (check4.current) {
              check4.current.checked = !check4.current.checked;
              handleCheckboxChange('check4', check4.current.checked);
            }
          }}
        >
          <S.ColumnWrapper>
            <Text typograph={'bodyLargeMedium'} color={'Grey190'}>
              타인에게 나의 웹메일, 카카오톡 ID,
            </Text>
            <Text typograph={'bodyLargeMedium'} color={'Grey190'}>
              전화번호를 도용 및 대여하지 않겠습니다.
            </Text>
          </S.ColumnWrapper>
          <PlainCheckbox
            value="4"
            checked={checkedState.check4}
            ref={check4}
            onChange={(e) => handleCheckboxChange('check4', !e.target.checked)}
          />
        </S.SecurityWrapper>
      </S.MainContainer>
      <S.ButtonWrapper className="layout-padding">
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
