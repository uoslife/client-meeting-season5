import { useMutation } from '@tanstack/react-query';
import { postFetcher } from '../../utils/api';

const postSendEmail = () => {
  postFetcher('/api/verification/send-email');
};

const useSendEmail = () => {
  return useMutation({
    mutationFn: () => {},
    onSuccess: () => {},
    onError: () => {},
  });
};
