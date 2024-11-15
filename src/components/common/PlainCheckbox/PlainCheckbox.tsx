import { forwardRef } from 'react';
import { S } from './style';
import checkIconSVG from '../../../lib/assets/images/checkIcon.svg';

interface PlainCheckboxPropsType
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
}

const PlainCheckbox = forwardRef<HTMLInputElement, PlainCheckboxPropsType>(
  ({ ...props }, ref) => {
    return (
      <S.CheckLabel>
        <S.CheckInput type="checkbox" {...props} ref={ref} />
        <S.CheckButton className="unchecked">
          <img src={checkIconSVG} />
        </S.CheckButton>
      </S.CheckLabel>
    );
  },
);

PlainCheckbox.displayName = 'Checkbox';

export default PlainCheckbox;
