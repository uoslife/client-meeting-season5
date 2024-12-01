import { UseFormRegisterReturn } from 'react-hook-form';
import Text from '../../common/Text';
import { S } from './style';
import Radio from '../../common/Radio';

export interface RenderPropsType {
  title: string;
  type: string;
  inputs: UseFormRegisterReturn[];
  error?: string;
}

export const IntegratedInput = ({ type, inputs, error }: RenderPropsType) => {
  return (
    <S.BasicProfileFirstInputWrapper>
      {type === 'radio' &&
        inputs?.map((input, index) => (
          <Radio key={`radio-key-${index}`} {...input} />
        ))}

      {error && (
        <Text typograph={'labelMediumSemiBold'} color={'Red60'}>
          {error}
        </Text>
      )}
    </S.BasicProfileFirstInputWrapper>
  );
};
