import { ReactNode, useState } from 'react';
import Toast from '../components/common/Toast';

export interface UseToastReturnType {
  toast: (timeout: number) => void;
  render: (text: string) => ReactNode;
}

const useToast = (): UseToastReturnType => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);

  const toast = (timeout: number): void => {
    setIsOpen(true);
    if (timer) clearTimeout(timer);

    const newTimer = window.setTimeout(() => {
      setIsOpen(false);
    }, timeout);
    setTimer(newTimer);
  };

  const close = () => {
    clearTimeout(timer);
    setIsOpen(false);
  };

  const render = (text: string) => {
    return <Toast isOpen={isOpen} text={text} onClick={close} />;
  };

  return { toast, render };
};
export default useToast;
