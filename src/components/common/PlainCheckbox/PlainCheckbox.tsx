import { forwardRef, useEffect } from 'react';
import { S } from './style';
import checkIconSVG from '../../../lib/assets/images/checkIcon.svg';

interface PlainCheckboxPropsType
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
}

const PlainCheckbox = forwardRef<HTMLInputElement, PlainCheckboxPropsType>(
  ({ ...props }, ref) => {
    useEffect(() => {
      console.log('asdf');
    }, []);
    return (
      <S.RadioLabel>
        <S.RadioInput type="checkbox" {...props} ref={ref} />
        <S.RadioButton className="unchecked">
          <img src={checkIconSVG} />
        </S.RadioButton>
      </S.RadioLabel>
    );
  },
);

PlainCheckbox.displayName = 'Checkbox';

export default PlainCheckbox;
