import { UseFormRegisterReturn } from 'react-hook-form';
import Text from '../../common/Text';
import { S } from './style';
import Radio from '../../common/Radio';
import { useEffect } from 'react';

export interface RenderPropsType {
  title: string;
  type: string;
  inputs: UseFormRegisterReturn[];
  error?: string;
}

export const IntegratedInput = ({ type, inputs, error }: RenderPropsType) => {
  useEffect(() => {
    inputs.map((item) => {
      console.log(item);
    });
  }, [inputs]);
  return (
    <S.BasicProfileFirstInputWrapper>
      {type === 'radio' &&
        inputs?.map((input) => (
          <Radio key={input.value} value={input.value} {...input} />
        ))}
      {error && (
        <Text typograph={'labelMediumSemiBold'} color={'Red60'}>
          {error}
        </Text>
      )}
    </S.BasicProfileFirstInputWrapper>
  );
};
