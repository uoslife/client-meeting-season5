import { collegeList } from '../../../lib/constants/college.const';
import Text from '../../../components/common/Text';
import { useState } from 'react';
import S from './style';

interface DepartmentPickerPropsType {
  setDepartment: (value: string) => void;
  department: string;
}

const DepartmentPicker = ({
  setDepartment,
  department,
}: DepartmentPickerPropsType) => {
  const [college, setCollege] = useState<string>('');

  const temp = collegeList.filter((item) => item.college === college);
  const departmentList = temp && temp[0] && temp[0].department;

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Box isClicked={false}>
          <Text color={'Blue70'} typograph={'bodyLargeMedium'}>
            단과대
          </Text>
        </S.Box>
        <S.Box isClicked={false}>
          <Text color={'Blue70'} typograph={'bodyLargeMedium'}>
            학과
          </Text>
        </S.Box>
      </S.TitleWrapper>
      <S.ItemsWrapper>
        <S.ItemWrapper>
          {collegeList.map((item) => {
            return (
              <S.Box
                key={item.college}
                isClicked={college === item.college}
                onClick={() => {
                  setDepartment('');
                  setCollege(item.college);
                }}
                type="college"
              >
                {college === item.college ? (
                  <Text
                    color={'Blue90'}
                    typograph={'bodyLargeMedium'}
                    style={{ fontWeight: 600 }}
                  >
                    {String(item.college)}
                  </Text>
                ) : (
                  <Text
                    color={college === item.college ? 'Blue90' : 'Blue40'}
                    typograph={'bodyLargeMedium'}
                  >
                    {String(item.college)}
                  </Text>
                )}
              </S.Box>
            );
          })}
        </S.ItemWrapper>
        <S.ItemWrapper>
          {departmentList &&
            departmentList.map((item) => {
              return (
                <S.Box
                  key={item}
                  isClicked={department === item}
                  onClick={() => {
                    setDepartment(item);
                  }}
                  type="department"
                >
                  {department === item ? (
                    <Text
                      color={'Red60'}
                      typograph={'bodyLargeMedium'}
                      style={{ fontWeight: 600 }}
                    >
                      {String(item)}
                    </Text>
                  ) : (
                    <Text
                      color={department === item ? 'Blue90' : 'Blue40'}
                      typograph={'bodyLargeMedium'}
                    >
                      {String(item)}
                    </Text>
                  )}
                </S.Box>
              );
            })}
        </S.ItemWrapper>
      </S.ItemsWrapper>
    </S.Wrapper>
  );
};
export default DepartmentPicker;
