import { forwardRef } from 'react';
import { S } from './style';

interface BasicInputPropsType
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue'> {
  type?: string;
  defaultValue?: string | number | readonly string[] | null;
}

const BasicInput = forwardRef<HTMLInputElement, BasicInputPropsType>(
  ({ type = 'text', defaultValue, ...props }, ref) => {
    const safeDefaultValue = defaultValue === null ? undefined : defaultValue;
    return (
      <S.Input
        type={type}
        defaultValue={safeDefaultValue}
        {...props}
        ref={ref}
      />
    );
  },
);

BasicInput.displayName = 'Input';
export default BasicInput;
