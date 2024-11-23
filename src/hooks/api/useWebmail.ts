import { useMutation } from '@tanstack/react-query';
import { errorHandler, postFetcher } from '../../utils/api';

const useSendEmail = () => {
  return useMutation({
    mutationFn: ({ email }: { email: string }) =>
      postFetcher(`/api/verification/send-email?email=${email}@uos.ac.kr`),
    onSuccess: (data) => data,
    onError: (error) => errorHandler(error),
  });
};

export { useSendEmail };
