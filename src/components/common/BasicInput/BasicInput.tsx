import { forwardRef, useCallback, useRef, useState } from 'react';
import { S } from './style';
import close from '../../../lib/assets/icon/close.svg';

interface BasicInputPropsType
  extends Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, 'defaultValue'> {
  type?: string;
  defaultValue?: string | number | readonly string[] | null;
}

const BasicInput = forwardRef<HTMLTextAreaElement, BasicInputPropsType>(
  ({ defaultValue, ...props }, ref) => {
    const [hasValue, setHasValue] = useState(!!defaultValue);
    const [isFocus, setIsFocus] = useState(false);
    const inputRef = useRef<HTMLTextAreaElement | null>(
      null,
    ) as React.MutableRefObject<HTMLTextAreaElement | null>;

    const inputRefCallback = useCallback(
      (element: HTMLTextAreaElement | null) => {
        inputRef.current = element;
        if (ref) {
          if (typeof ref === 'function') {
            ref(element);
          } else if (ref && 'current' in ref) {
            (
              ref as React.MutableRefObject<HTMLTextAreaElement | null>
            ).current = element;
          }
        }
      },
      [ref],
    );

    const handleInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
      const inputValue = (event.target as HTMLTextAreaElement).value;
      setHasValue(inputValue !== '');
    };
    const handleClear = () => {
      if (inputRef && inputRef.current) {
        inputRef.current.value = '';
        setHasValue(false);
      }
    };

    return (
      <S.Container>
        <S.Input
          defaultValue={defaultValue || ''}
          {...props}
          ref={inputRefCallback}
          onChange={handleInput}
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={() => setIsFocus(false)}
        />
        {hasValue && isFocus && (
          <S.ClearButton
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleClear}
            aria-label="Clear input"
          >
            <img src={close} alt="close" width={20} height={20} />
          </S.ClearButton>
        )}
      </S.Container>
    );
  },
);

BasicInput.displayName = 'Input';
export default BasicInput;
