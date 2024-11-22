import { forwardRef } from 'react';
import { S } from './style';

interface CheckboxPropsType
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: JSX.Element | string;
  value: string;
  checked: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxPropsType>(
  ({ label, checked, ...props }, ref) => {
    return (
      <S.RadioLabel>
        <S.RadioInput type="checkbox" {...props} ref={ref} checked={checked} />
        <S.RadioButton className="unchecked">{label}</S.RadioButton>
      </S.RadioLabel>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
