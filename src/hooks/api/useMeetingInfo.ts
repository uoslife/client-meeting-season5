import { useMutation, UseMutationResult } from '@tanstack/react-query';
import useAuthAxios from '../axios/useAuthAxios';
import { errorHandler } from '../../utils/api';
import {
  AppearanceType,
  EyelidType,
  SmokingType,
  WeightType,
} from '../../lib/types/personalMeeting.type';

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

  //추후에 전역 userInfo로 수정

  return useMutation<void, Error, MeetingTeamInfoRequest>({
    //두 개로 나눠놓은거
    mutationFn: ({ context }) =>
      // console.log({
      //   ageMin: parseAge(context.targetAge)[0],
      //   ageMax: parseAge(context.targetAge)[1],
      //   heightMin: parseHeight(context.targetHeight)[0],
      //   heightMax: parseHeight(context.targetHeight)[1],
      //   mbti: parseMbti(context.targetMbti),
      //   eyelidType: parseAppearance(context.targetAppearanceType)[0],
      //   appearanceType: parseAppearance(context.targetAppearanceType)[1],
      //   smoking: parseSmoking(context.targetSmoking),
      //   weight: WEIGHT_ENUM[context.prefer],
      //   avoidDepartment: context.avoidDepartment,
      //   avoidNumber: context.avoidStudentId.slice(-2),
      //   course: context.course,
      // });
      postFetcher(`/api/meeting/SINGLE/info`, {
        ageMin: parseAge(context.targetAge)[0],
        ageMax: parseAge(context.targetAge)[1],
        heightMin: parseHeight(context.targetHeight)[0],
        heightMax: parseHeight(context.targetHeight)[1],
        mbti: parseMbti(context.targetMbti),
        eyelidType: parseAppearance(context.targetAppearanceType)[0],
        appearanceType: parseAppearance(context.targetAppearanceType)[1],
        smoking: parseSmoking(context.targetSmoking),
        weight: WEIGHT_ENUM[context.prefer],
        avoidanceDepartment: context.avoidDepartment,
        avoidanceNumber: context.avoidStudentId.slice(-2),
        course: context.course,
      }),
    onSuccess: () => {},
    onError: (error) => errorHandler(error),
  });
};

const EYELID_ENUM: { [key: string]: EyelidType } = {
  속쌍: 'INNER',
  유쌍: 'DOUBLE',
  무쌍: 'SINGLE',
};

const APPEARANCE_ENUM: { [key: string]: AppearanceType } = {
  또렷: 'ARAB',
  순한: 'TOFU',
  중간: 'NORMAL',
};

const SMOKING_ENUM: { [key: string]: SmokingType } = {
  전자담배: 'E_CIGARETTE',
  연초: 'CIGARETTE',
  비흡연: 'FALSE',
};

const WEIGHT_ENUM: { [key: string]: WeightType } = {
  나이: 'AGE',
  키: 'HEIGHT',
  MBTI: 'MBTI',
  외모: 'APPEARANCE',
  '흡연 여부': 'SMOKING',
};

const parseMbti = (targetMbti: string): string => {
  return targetMbti.replaceAll('/', '').replaceAll(',', '');
};

const parseAppearance = (
  targetAppearance: string,
): [EyelidType[], AppearanceType[]] => {
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
  const smokingArr = targetSmoking.split(',').map((item) => item.trim());

  return smokingArr.map((item) => {
    const mappedValue = SMOKING_ENUM[item as keyof typeof SMOKING_ENUM];
    return mappedValue;
  });
};

const parseAge = (targetAge: string): number[] => {
  const matches = targetAge.match(/-?\d+/g);
  if (!matches) return [];
  return matches.map((num) => parseInt(num, 10));
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
