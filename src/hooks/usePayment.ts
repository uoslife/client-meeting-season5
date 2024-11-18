import { useMemo } from 'react';
import { getFetcher, postFetcher } from '../utils/api';
import { AxiosResponse, isAxiosError } from 'axios';
import { RequestPayParams } from '../lib/types/Payment';

type GetMerchantUidPropsType = {
  accessToken: string;
};

// const requestMerchantUid = async ({
//   accessToken,
// }: Pick<RequestPaymentPropsType, 'accessToken'>) => {
//   const {
//     merchant_uid: merchantUid,
//     amount: price,
//     buyer_tel: phonenumber,
//     buyer_name: name,
//     name: productName,
//   } = await getMerchantUid({ accessToken });
//   console.log('reqMerch');
//   console.log({
//     merchantUid,
//     price,
//     phonenumber,
//     name,
//     productName,
//   });
//   return { merchantUid, price, phonenumber, name, productName };
// };

const requestMerchantUid = async ({
  accessToken,
}: Pick<RequestPaymentPropsType, 'accessToken'>) => {
  const {
    merchantUid: merchant_uid,
    price: amount,
    phonenumber: buyer_tel,
    name: buyer_name,
    productName: name,
  } = await getMerchantUid({ accessToken });
  console.log('reqMerch');

  return { merchant_uid, amount, buyer_tel, buyer_name, name };
};

const verifyPayment = async ({
  teamType,
}: {
  teamType: 'SINGLE' | 'TRIPLE';
}) => {
  const res = await getFetcher({
    url: `/api/payment/${teamType}/verify`,
  });
  console.log('verify', res);
  return res;
};

const getMerchantUid = async ({
  accessToken,
}: GetMerchantUidPropsType): Promise<Partial<RequestPayParams>> => {
  const teamType = 'SINGLE';
  try {
    const res = await postFetcher<Partial<RequestPayParams>>({
      url: `/api/payment/${teamType}/request`,
      data: {
        pg: 'WELCOME_PAYMENTS',
        payMethod: 'CARD',
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res;
  } catch (err) {
    if (isAxiosError(err)) {
      const { status } = err?.response as AxiosResponse;
      switch (status) {
        case 400: {
          console.log('요청 값에 문제가 있음');
          break;
        }
        case 401: {
          console.log('부적절한 토큰 정보');
          break;
        }
      }
      console.log('알 수 없는 에러가 발견되었습니다.');
    }
    throw err;
  }
};

interface RequestPaymentPropsType {
  teamType: 'SINGLE' | 'TRIPLE';
  accessToken: string;
}

const usePayment = () => {
  const ID = 'imp04325748';

  const IMP = useMemo(() => {
    if (typeof window !== 'undefined') {
      return (window as any).IMP;
    }
  }, []);

  IMP?.init(ID);

  const requestPayment = async ({
    teamType,
    accessToken,
  }: RequestPaymentPropsType) => {
    const { merchant_uid, amount, buyer_tel, buyer_name, name } =
      await requestMerchantUid({ accessToken });

    const data: RequestPayParams = {
      pg: 'welcome',
      pay_method: 'card',
      merchant_uid: merchant_uid as string,
      amount: amount as number,
      name: name,
      buyer_tel: buyer_tel,
      buyer_name: buyer_name,
      m_redirect_url: 'http://localhost:5173/payment-test',
      app_scheme: 'uoslife',
    };

    return new Promise((resolve, reject) => {
      IMP?.request_pay(data, async (res: any) => {
        if (res.error_code != null) {
          alert('문제 발생: ' + res.error_msg);
          reject(res.error_msg);
        } else {
          try {
            const notified = await postFetcher({
              url: `/api/payment/${teamType}/check`,
              data: {
                impUid: res.imp_uid,
              },
            });
            resolve(notified);
          } catch (error) {
            reject(error);
          }
        }
      });
    });
  };

  return { requestPayment, verifyPayment };
};

export default usePayment;
