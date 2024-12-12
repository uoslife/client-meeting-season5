import { UseFormRegisterReturn } from 'react-hook-form';
import { S } from './style';
import Checkbox from '../../common/Checkbox';

interface AgeBottomSheetPropsType {
  title: string;
  type: string;
  inputs: (UseFormRegisterReturn & {
    value: string;
    label: string;
    checked: boolean;
  })[];
  errors: string | undefined;
}

interface AgeBottomSheetsPropsType {
  memo: AgeBottomSheetPropsType[];
}
const AgeBottomSheet = ({ memo }: AgeBottomSheetsPropsType) => {
  return (
    <S.Container>
      {memo.map(({ inputs }, index) => (
        <S.AppearanceItemWrapper key={index}>
          <S.AppearanceItem>
            {inputs.map((input, idx) => (
              <Checkbox key={idx} {...input} checked={input.checked} />
            ))}
          </S.AppearanceItem>
        </S.AppearanceItemWrapper>
      ))}
    </S.Container>
  );
};
export default AgeBottomSheet;
