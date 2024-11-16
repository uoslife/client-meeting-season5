import styled from 'styled-components';
import Indicator from '../../../components/common/Indicator';
import Text from '../../../components/common/Text';
import Radio from '../../../components/common/Radio';
import Button from '../../../components/common/Button';
import { useEffect } from 'react';

interface SecondChoicePage {
  academicStatus: '학부생' | '대학원생' | '졸업생' | undefined;
  setAcademicStatus: (
    academicStatus: '학부생' | '대학원생' | '졸업생' | undefined,
  ) => void;
  handleNextButtonClick: () => void;
}

const SecondChoicePage = ({
  academicStatus,
  setAcademicStatus,
  handleNextButtonClick,
}: SecondChoicePage) => {
  useEffect(() => {
    setAcademicStatus(undefined);
  }, []);
  return (
    <S.Wrapper className="layout-padding">
      <S.TitleWrapper>
        <Indicator depth={3} currentLevel={2} />
        <S.TextWrapper>
          <Text color={'Blue90'} typograph={'headlineMedium'}>
            신분을 선택해주세요
          </Text>
        </S.TextWrapper>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            paddingTop: 40,
          }}
        >
          <Radio
            label={'학부생'}
            name="academic-status"
            value="학부생"
            onClick={() => {
              setAcademicStatus('학부생');
            }}
          />
          <Radio
            label={'졸업생'}
            name="academic-status"
            value="졸업생"
            onClick={() => {
              setAcademicStatus('졸업생');
            }}
          />
          <Radio
            label={'대학원생'}
            name="academic-status"
            value="대학원생"
            onClick={() => {
              setAcademicStatus('대학원생');
            }}
          />
        </form>
      </S.TitleWrapper>
      <div style={{ paddingBottom: 36 }}>
        <Button
          type="submit"
          buttonColor={'primary'}
          disabled={!academicStatus}
          onClick={handleNextButtonClick}
        >
          다음
        </Button>
      </div>
    </S.Wrapper>
  );
};

export default SecondChoicePage;

const S = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
  `,
  TitleWrapper: styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding-top: 20px;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 40;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;
    padding-top: 2rem;
  `,
};
