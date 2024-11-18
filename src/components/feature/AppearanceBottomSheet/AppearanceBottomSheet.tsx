import { UseFormRegisterReturn } from 'react-hook-form';
import { S } from './style';
import Radio from '../../common/Radio';
import Text from '../../common/Text';

interface AppearancePropsType {
  title: string;
  type: string;
  inputs: UseFormRegisterReturn[];
  error: string | undefined;
}

interface AppearanceBottomSheetPropsType {
  memo: AppearancePropsType[];
}
const AppearanceBottomSheet = ({ memo }: AppearanceBottomSheetPropsType) => {
  return (
    <S.Container>
      {memo.map(({ title, inputs }, index) => (
        <S.AppearanceItemWrapper key={index}>
          <Text
            typograph={'titleSmall'}
            color={'Blue90'}
            style={{ fontWeight: 600 }}
          >
            {title}
          </Text>
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
export default AppearanceBottomSheet;
