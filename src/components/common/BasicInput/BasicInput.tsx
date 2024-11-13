import { forwardRef } from 'react';
import { S } from './style';

interface BasicInputPropsType
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
}

const BasicInput = forwardRef<HTMLInputElement, BasicInputPropsType>(
  ({ type = 'text', ...props }, ref) => {
    return <S.Input type={type} {...props} ref={ref} />;
  },
);
BasicInput.displayName = 'Input';
export default BasicInput;
