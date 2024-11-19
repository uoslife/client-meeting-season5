import { useMemo } from 'react';
import { getFetcher, postFetcher } from '../utils/api';
import { AxiosResponse, isAxiosError } from 'axios';
import { RequestPayParams, RequestPayResponse } from '../lib/types/Payment';

type GetMerchantUidPropsType = {
  teamType: 'TRIPLE' | 'SINGLE';
  accessToken: string;
};

interface RequestPaymentResopnseType {
  merchantUid: string;
  price: number;
  phoneNumber: string;
  name: string;
  productName: 'SINGLE' | 'TRIPLE';
}

const requestMerchantUid = async ({
  teamType,
  accessToken,
}: RequestPaymentPropsType) => {
  const {
    merchantUid: merchant_uid,
    price: amount,
    phoneNumber: buyer_tel,
    name: buyer_name,
    productName: name,
  } = await getMerchantUid({ teamType, accessToken });
  console.log(buyer_tel);
  return { merchant_uid, amount, buyer_tel, buyer_name, name };
};

const verifyPayment = async ({
  teamType,
  accessToken,
}: {
  teamType: 'SINGLE' | 'TRIPLE';
  accessToken: string;
}) => {
  const res = await getFetcher({
    url: `/api/payment/${teamType}/verify`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log('verify', res);
  return res;
};

const getMerchantUid = async ({
  teamType,
  accessToken,
}: GetMerchantUidPropsType): Promise<RequestPaymentResopnseType> => {
  try {
    console.log(teamType, accessToken);
    const res = await postFetcher<RequestPaymentResopnseType>({
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
      return window.IMP;
    }
  }, []);

  IMP?.init(ID);

  const requestPayment = async ({
    teamType,
    accessToken,
  }: RequestPaymentPropsType) => {
    const { merchant_uid, amount, buyer_tel, buyer_name, name } =
      await requestMerchantUid({ teamType, accessToken });

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
      IMP?.request_pay(data, async (res: RequestPayResponse) => {
        if (res.error_code != null) {
          console.log(res.error_code);
          alert('문제 발생: ' + res.error_code + ' : ' + res.error_msg);
          reject(res.error_msg);
        } else {
          try {
            const notified = await postFetcher({
              url: `/api/payment/${teamType}/check`,
              data: {
                impUid: res.imp_uid,
              },
              headers: {
                Authorization: `Bearer ${accessToken}`,
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
