import { forwardRef } from 'react';
import { S } from './style';
import Text from '../Text';

export interface RadioPropsType
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: JSX.Element | string;
  subLabel: JSX.Element | string;
  value: string;
}

const CustomRadio = forwardRef<HTMLInputElement, RadioPropsType>(
  ({ label, subLabel, ...props }, ref) => {
    return (
      <S.RadioLabel>
        <S.RadioInput type="radio" {...props} ref={ref} />
        <S.RadioButton className="unchecked" {...props}>
          <S.TextWrapper>
            <Text
              typograph={'headlineLarge'}
              color={'Blue30'}
              style={{ fontWeight: 700 }}
            >
              {label.toString()}
            </Text>
            <Text typograph={'labelMediumSemiBold'} color={'Blue30'}>
              {subLabel.toString()}
            </Text>
          </S.TextWrapper>
        </S.RadioButton>
      </S.RadioLabel>
    );
  },
);

CustomRadio.displayName = 'Radio';

export default CustomRadio;
