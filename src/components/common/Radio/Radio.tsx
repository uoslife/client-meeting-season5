import { forwardRef } from 'react';
import { S } from './style';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: JSX.Element | string;
  value: string;
}

const Radio = forwardRef<HTMLInputElement, Props>(
  ({ label, ...props }, ref) => {
    return (
      <S.RadioLabel>
        <S.RadioInput type="radio" {...props} ref={ref} />
        <S.RadioButton className="unchecked">{label}</S.RadioButton>
      </S.RadioLabel>
    );
  },
);

Radio.displayName = 'Radio';

export default Radio;
