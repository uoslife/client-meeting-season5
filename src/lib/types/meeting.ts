import { DepartmentType } from './personalMeeting.type';

type TeamType = 'SINGLE' | 'TRIPLE';

type SmokingType = 'CIGARETTE' | 'E_CIGARETTE' | 'FALSE';

type AppearanceType = 'ARAB' | 'NORMAL' | 'TOFU';

type EyelidType = 'DOUBLE' | 'INNER' | 'SINGLE';

export interface UserInfoType {
  isLeader: boolean;
  name: string;
  studentType: 'UNDERGRADUATE' | 'GRADUATE' | 'POSTGRADUATE';
  department: DepartmentType | null;
  studentNumber: number | null;
  age: number;
  height: number;
  mbti: string;
  appearanceType: AppearanceType;
  eyelidType: EyelidType;
  smoking: SmokingType;
  interest: string[];
  kakaoTalkId: string;
}

export interface PreferenceType {
  ageMin: number;
  ageMax: number;
  heightMin: number | null;
  heightMax: number | null;
  smoking: SmokingType[] | null;
  appearanceType: AppearanceType[] | null;
  eyelidType: EyelidType[] | null;
  mbti: string | null;
  mood: string | null;
  weight: string | null;
  avoidanceNumber: string | null;
  avoidanceDepartment: string | null;
}

export interface MeetingTeamType {
  teamType: TeamType;
  teamName: string | null;
  course: string;
  gender: 'MALE' | 'FEMALE' | 'OTHER'; // 확장 가능
  code: string | null;
  meetingTeamUserProfiles: UserInfoType[];
  preference: PreferenceType;
}
