import { atom } from 'jotai';

interface UserInfo {
  email: string | null;
  phoneNumber: string | null;
  name: string | null;
  kakaoTalkId: string | null;
  genderType: string | null;
  age: string | null;
}

export const userInfoAtom = atom<UserInfo>({
  email: '',
  phoneNumber: '',
  name: '',
  kakaoTalkId: '',
  genderType: '',
  age: '',
});
