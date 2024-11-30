import { ReactNode, useState } from 'react';
import { OptionalProfileType } from '../../../pages/BasicProfilePage/BasicProfilePage';
import SecondDepartmentPage from '../../../components/feature/SecondDepartmentPage';
import SecondChoicePage from '../../../components/feature/SecondChoicePage';

export type AcademicStatusType = '학부생' | '대학원생' | '졸업생' | undefined;

const Second = (props: {
  onNext: ({
    studentType,
    department,
    studentId,
  }: Pick<
    OptionalProfileType,
    'department' | 'studentId' | 'studentType'
  >) => void;
}): ReactNode => {
  const [isChoicePage, setIsChoisePage] = useState<boolean>(true);
  const [academicStatus, setAcademicStatus] = useState<AcademicStatusType>();
  const handleNextButtonClick = () => {
    if (academicStatus === '학부생') {
      setIsChoisePage(false);
      return;
    }
    props.onNext({
      studentType: academicStatus,
      department: null,
      studentId: null,
    });
  };
  return isChoicePage ? (
    <SecondChoicePage
      academicStatus={academicStatus}
      setAcademicStatus={setAcademicStatus}
      handleNextButtonClick={handleNextButtonClick}
    />
  ) : (
    <SecondDepartmentPage
      onNext={props.onNext}
      academicStatus={academicStatus}
    />
  );
};
export default Second;
