import { atom } from 'jotai';
export const accessTokenAtom = atom<string>('');
export type accessTokenAtomType = typeof accessTokenAtom;
