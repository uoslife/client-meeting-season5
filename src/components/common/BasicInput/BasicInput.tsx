import { forwardRef, useCallback, useRef, useState } from 'react';
import { S } from './style';
import close from '../../../lib/assets/icon/close.svg';

interface BasicInputPropsType
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue'> {
  type?: string;
  defaultValue?: string | number | readonly string[] | null;
}

const BasicInput = forwardRef<HTMLInputElement, BasicInputPropsType>(
  ({ type = 'text', defaultValue, ...props }, ref) => {
    const [hasValue, setHasValue] = useState(!!defaultValue);
    const inputRef = useRef<HTMLInputElement | null>(
      null,
    ) as React.MutableRefObject<HTMLInputElement | null>;

    const inputRefCallback = useCallback(
      (element: HTMLInputElement | null) => {
        inputRef.current = element;
        if (ref) {
          if (typeof ref === 'function') {
            ref(element);
          } else if (ref && 'current' in ref) {
            (ref as React.MutableRefObject<HTMLInputElement | null>).current =
              element;
          }
        }
      },
      [ref],
    );

    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
      const inputValue = (event.target as HTMLInputElement).value;
      setHasValue(inputValue !== '');
    };
    const handleClear = () => {
      if (inputRef && inputRef.current) {
        inputRef.current.value = '';
      }
    };

    return (
      <S.Container>
        <S.Input
          type={type}
          defaultValue={defaultValue || ''}
          {...props}
          ref={inputRefCallback}
          onChange={handleInput}
        />
        {hasValue && (
          <S.ClearButton onClick={handleClear} aria-label="Clear input">
            <img src={close} alt="close" width={20} height={20} />
          </S.ClearButton>
        )}
      </S.Container>
    );
  },
);

BasicInput.displayName = 'Input';
export default BasicInput;
