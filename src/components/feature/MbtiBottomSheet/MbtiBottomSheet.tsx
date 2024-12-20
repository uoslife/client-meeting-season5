import { UseFormRegisterReturn } from 'react-hook-form';
import { S } from './style';
import CustomRadio from '../../common/CustomRadio';

interface MemoPropsType {
  title: string;
  type: string;
  inputs: (UseFormRegisterReturn & {
    value: string;
    label: string;
  })[];
  errors: string | undefined;
}

interface MbtiBottomSheetProps {
  memo: MemoPropsType[];
}

const MbtiBottomSheet = ({ memo }: MbtiBottomSheetProps) => {
  return (
    <S.Container>
      {memo.map(({ inputs }, index) => (
        <S.MbtiWrapper key={`mbti-group-${index}`}>
          <S.MbtiItem>
            {inputs.map((input, idx) => {
              return <CustomRadio key={`input-${index}-${idx}`} {...input} />;
            })}
          </S.MbtiItem>
        </S.MbtiWrapper>
      ))}
    </S.Container>
  );
};

export default MbtiBottomSheet;
