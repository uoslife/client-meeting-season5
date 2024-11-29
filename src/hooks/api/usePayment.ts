import { useQuery } from '@tanstack/react-query';
import useAuthAxios from '../axios/useAuthAxios';

const usePaymentResult = ({ teamType }: { teamType: 'SINGLE' | 'TRIPLE' }) => {
  const { getFetcher } = useAuthAxios();
  return useQuery({
    queryKey: ['paymentResult'],
    queryFn: () => getFetcher(`/api/payment/${teamType}/verify`),
  });
};

export { usePaymentResult };
