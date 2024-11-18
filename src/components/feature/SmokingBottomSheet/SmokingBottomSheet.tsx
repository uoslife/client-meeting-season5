import { UseFormRegisterReturn } from 'react-hook-form';
import { S } from './style';
import Radio from '../../common/Radio';
import Text from '../../common/Text';

interface SmokingBottomSheetPropsType {
  title: string;
  type: string;
  inputs: UseFormRegisterReturn[];
  error: string | undefined;
}

interface SmokingBottomSheetPropsType {
  memo: SmokingBottomSheetPropsType[];
}
const SmokingBottomSheet = ({ memo }: SmokingBottomSheetPropsType) => {
  return (
    <S.Container>
      {memo.map(({ title, inputs }, index) => (
        <S.AppearanceItemWrapper key={index}>
          <S.AppearanceItem>
            {inputs.map((input, idx) => (
              <Radio key={idx} {...input} />
            ))}
          </S.AppearanceItem>
        </S.AppearanceItemWrapper>
      ))}
    </S.Container>
  );
};
export default SmokingBottomSheet;
