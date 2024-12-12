import { UseFormRegisterReturn } from 'react-hook-form';
import { S } from './style';
import Radio from '../../common/Radio';
// 개별 항목의 타입 정의
interface SmokingBottomSheetItemType {
  title: string;
  type: string;
  inputs: (UseFormRegisterReturn & { value: string; label: string })[];
  errors: string | undefined;
}

// 컴포넌트의 props 타입 정의
interface SmokingBottomSheetProps {
  memo: SmokingBottomSheetItemType[];
}
const SmokingBottomSheet = ({ memo }: SmokingBottomSheetProps) => {
  return (
    <S.Container>
      {memo.map(({ inputs }, index) => (
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
