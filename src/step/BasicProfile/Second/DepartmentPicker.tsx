import styled from 'styled-components';
import { collegeList } from './college.const';
import { COLORS } from '../../../lib/constants';
import Text from '../../../components/common/Text';
import { useState } from 'react';

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
                onClick={() => setCollege(item.college)}
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
                >
                  {department === item ? (
                    <Text
                      color={'Blue90'}
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

type BoxPropsType = {
  isClicked: boolean;
};

const S = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  TitleWrapper: styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid ${COLORS.Blue10};
  `,
  Box: styled.div<BoxPropsType>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
    border-radius: 4px;
    background: ${(props) => props.isClicked && COLORS.Blue2};
  `,
  ItemsWrapper: styled.div`
    display: flex;
    width: 100%;
  `,
  ItemWrapper: styled.div`
    width: 100%;
  `,
};
