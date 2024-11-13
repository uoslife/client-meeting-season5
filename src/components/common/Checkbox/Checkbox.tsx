import { forwardRef } from 'react';
import { S } from './style';

interface CheckboxPropsType
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: JSX.Element | string;
  value: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxPropsType>(
  ({ label, ...props }, ref) => {
    return (
      <S.RadioLabel>
        <S.RadioInput type="checkbox" {...props} ref={ref} />
        <S.RadioButton className="unchecked">{label}</S.RadioButton>
      </S.RadioLabel>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
