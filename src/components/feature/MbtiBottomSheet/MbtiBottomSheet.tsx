import { UseFormRegisterReturn } from 'react-hook-form';
import { S } from './style';
import CustomRadio from '../../common/CustomRadio';

interface MemoPropsType {
  title: string;
  type: string;
  inputs: UseFormRegisterReturn[];
  error: string | undefined;
}

interface MbtiBottomSheetProps {
  memo: MemoPropsType[];
}

const MbtiBottomSheet = ({ memo }: MbtiBottomSheetProps) => {
  return (
    <S.Container>
      {memo.map(({ inputs }, index) => (
        <S.MbtiWrapper key={`mbti-group-${index}`}>
          <S.MbtiItem key={`mbti-group-${index}`}>
            {inputs.map((input, idx) => (
              <CustomRadio
                key={`input-${index}-${idx}`}
                value={input.value}
                {...input}
                style={{}}
              />
            ))}
          </S.MbtiItem>
        </S.MbtiWrapper>
      ))}
    </S.Container>
  );
};

export default MbtiBottomSheet;
