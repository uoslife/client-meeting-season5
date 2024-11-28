import { atom } from 'jotai';

interface UserInfo {
  email: string | null;
  phoneNumber: string | null;
  name: string | null;
  kakaoTalkId: string | null;
  genderType: 'MALE' | 'FEMALE' | null;
}

export const userInfoAtom = atom<UserInfo>({
  email: 'string',
  phoneNumber: 'string',
  name: 'string',
  kakaoTalkId: 'string',
  genderType: 'MALE',
});
