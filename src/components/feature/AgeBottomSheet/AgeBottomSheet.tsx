import { UseFormRegisterReturn } from 'react-hook-form';
import { S } from './style';
import Checkbox from '../../common/Checkbox';

interface AgeBottomSheetPropsType {
  title: string;
  type: string;
  inputs: UseFormRegisterReturn[];
  error: string | undefined;
}

interface AgeBottomSheetPropsType {
  memo: AgeBottomSheetPropsType[];
}
const AgeBottomSheet = ({ memo }: AgeBottomSheetPropsType) => {
  return (
    <S.Container>
      {memo.map(({ title, inputs }, index) => (
        <S.AppearanceItemWrapper key={index}>
          <S.AppearanceItem>
            {inputs.map((input, idx) => (
              <Checkbox key={idx} {...input} />
            ))}
          </S.AppearanceItem>
        </S.AppearanceItemWrapper>
      ))}
    </S.Container>
  );
};
export default AgeBottomSheet;
