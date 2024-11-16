import Indicator from '../../../components/common/Indicator';
import Text from '../../../components/common/Text';
import Radio from '../../../components/common/Radio';
import Button from '../../../components/common/Button';
import { useEffect } from 'react';
import S from './style';

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
    <S.Form className="layout-padding">
      <S.Container>
        <S.IndicatorBox>
          <Indicator depth={3} currentLevel={2} />
        </S.IndicatorBox>
        <Text
          typograph={'headlineMedium'}
          color={'Blue90'}
          style={{ fontWeight: 700, width: '100%' }}
        >
          기본 정보를 입력해주세요
        </Text>
        <S.RadioWrapper>
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
        </S.RadioWrapper>
      </S.Container>
      <S.ButtonContainer>
        <Button
          type="submit"
          buttonColor={'primary'}
          disabled={!academicStatus}
          onClick={handleNextButtonClick}
        >
          다음
        </Button>
      </S.ButtonContainer>
    </S.Form>
  );
};

export default SecondChoicePage;
