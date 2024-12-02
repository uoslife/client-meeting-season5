import { useMutation, UseMutationResult } from '@tanstack/react-query';
import useAuthAxios from '../axios/useAuthAxios';
import {
  AppearanceType,
  EyelidType,
  SmokingType,
  WeightType,
} from '../../lib/types/personalMeeting.type';
import { useAtomValue } from 'jotai';
import { userInfoAtom } from '../../store/userInfo';

export type ContextType = {
  avoidDepartment: string;
  avoidStudentId: string;
  course: string;
  prefer: string;
  targetAge: string;
  targetAppearanceType: string;
  targetHeight: string;
  targetMbti: string;
  targetSmoking: string;
};

interface MeetingTeamInfoRequest {
  context: ContextType;
}

export const useMeetingInfo = (): UseMutationResult<
  void,
  Error,
  MeetingTeamInfoRequest
> => {
  const { postFetcher } = useAuthAxios();
  const userInfo = useAtomValue(userInfoAtom);

  return useMutation<void, Error, MeetingTeamInfoRequest>({
    mutationFn: ({ context }) =>
      postFetcher(`/api/meeting/SINGLE/info`, {
        ageMin:
          parseInt(userInfo.age as string) +
          (parseAge(context.targetAge)[0] === -5
            ? parseAge(context.targetAge)[0] - 5
            : parseAge(context.targetAge)[0]),
        ageMax:
          parseInt(userInfo.age as string) +
          (parseAge(context.targetAge)[1] === 5
            ? parseAge(context.targetAge)[1] + 5
            : parseAge(context.targetAge)[1]),
        heightMin: parseHeight(context.targetHeight)[0],
        heightMax: parseHeight(context.targetHeight)[1],
        mbti: parseMbti(context.targetMbti),
        eyelidType: parseAppearance(context.targetAppearanceType)[0],
        appearanceType: parseAppearance(context.targetAppearanceType)[1],
        smoking: parseSmoking(context.targetSmoking),
        weight: WEIGHT_ENUM[context.prefer],
        avoidanceDepartment: context.avoidDepartment,
        avoidanceNumber: context.avoidStudentId
          ? context.avoidStudentId.slice(-2)
          : null,
        course: context.course,
      }),
  });
};

export const EYELID_ENUM: { [key: string]: EyelidType } = {
  속쌍: 'INNER',
  유쌍: 'DOUBLE',
  무쌍: 'SINGLE',
};

export const APPEARANCE_ENUM: { [key: string]: AppearanceType } = {
  또렷: 'ARAB',
  순한: 'TOFU',
  중간: 'NORMAL',
};

export const SMOKING_ENUM: { [key: string]: SmokingType } = {
  전자담배: 'E_CIGARETTE',
  연초: 'CIGARETTE',
  비흡연: 'FALSE',
};

const WEIGHT_ENUM: { [key: string]: WeightType } = {
  나이: 'AGE',
  키: 'HEIGHT',
  MBTI: 'MBTI',
  외모: 'APPEARANCE',
  흡연여부: 'SMOKING',
};

const parseMbti = (targetMbti: string): string => {
  if (targetMbti === '상관없음') return 'EINSTFJP';
  return targetMbti.replaceAll('/', '').replaceAll(',', '');
};

const parseAppearance = (
  targetAppearance: string,
): [EyelidType[], AppearanceType[]] => {
  if (targetAppearance === '상관없음')
    return [
      ['DOUBLE', 'INNER', 'SINGLE'],
      ['ARAB', 'NORMAL', 'TOFU'],
    ];
  const [left, right] = targetAppearance.split('/').map((str) => str.trim());
  const eyelidArr = left.split(',').map((str) => str.trim());
  const appearanceArr = right.split(',').map((str) => str.trim());

  const mappedEyelidArr = eyelidArr.map(
    (item) => EYELID_ENUM[item as keyof typeof EYELID_ENUM],
  );
  const mappedAppearanceArr = appearanceArr.map(
    (item) => APPEARANCE_ENUM[item as keyof typeof APPEARANCE_ENUM],
  );

  return [mappedEyelidArr, mappedAppearanceArr];
};

const parseSmoking = (targetSmoking: string): SmokingType[] => {
  if (targetSmoking === '상관없음')
    return ['CIGARETTE', 'E_CIGARETTE', 'FALSE'];
  const smokingArr = targetSmoking.split(',').map((item) => item.trim());

  return smokingArr.map((item) => {
    const mappedValue = SMOKING_ENUM[item as keyof typeof SMOKING_ENUM];
    return mappedValue;
  });
};

const parseAge = (targetAge: string): number[] => {
  const matches = targetAge.match(/-?\d+|동갑/g);
  if (!matches) return [];
  return matches.map((num) =>
    isNaN(parseInt(num, 10)) ? 0 : parseInt(num, 10),
  );
};

const parseHeight = (targetAge: string): string[] => {
  const ageArr = targetAge.split('~');
  return ageArr
    .map((item) => {
      const match = item.match(/\d+/);
      return match ? match[0] : '';
    })
    .filter((item) => item !== '');
};
