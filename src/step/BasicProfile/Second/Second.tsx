import { ReactNode, useState } from 'react';
import { OptionalProfileType } from '../../../pages/BasicProfilePage/BasicProfilePage';
import SecondChoicePage from './SecondChoicePage';
import SecondDepartmentPage from './SecondDepartmentPage';

type AcademicStatusType = '학부생' | '대학원생' | '졸업생' | undefined;

const Second = (props: {
  onNext: ({
    department,
    studentId,
  }: Pick<OptionalProfileType, 'department' | 'studentId'>) => void;
}): ReactNode => {
  const [isChoicePage, setIsChoisePage] = useState<boolean>(true);
  const [academicStatus, setAcademicStatus] = useState<AcademicStatusType>();
  const handleNextButtonClick = () => {
    if (academicStatus === '학부생') {
      setIsChoisePage(false);
      return;
    }
    props.onNext({ department: null, studentId: null });
  };
  return isChoicePage ? (
    <SecondChoicePage
      academicStatus={academicStatus}
      setAcademicStatus={setAcademicStatus}
      handleNextButtonClick={handleNextButtonClick}
    />
  ) : (
    <SecondDepartmentPage />
  );
};
export default Second;
