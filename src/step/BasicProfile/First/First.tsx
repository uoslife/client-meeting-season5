import { ReactNode, useMemo, useState } from 'react';
import { BaseProfileType } from '../../../pages/BasicProfilePage/BasicProfilePage';
import { S } from './style';
import Button from '../../../components/common/Button';
import Indicator from '../../../components/common/Indicator';
import Text from '../../../components/common/Text';
import useProfileForm from '../../../hooks/useProfileForm';
import BasicInput from '../../../components/common/BasicInput';
import useBottomSheet from '../../../hooks/useBottomSheet';
import { getAgeFromYear } from '../../../utils/time';
import {
  IntegratedInput,
  RenderPropsType,
} from '../../../components/feature/IntegratedInput/IntegratedInput';
import Picker from '../../../components/common/Picker';

const First = (props: {
  onNext: ({
    name,
    genderType,
    age,
    phoneNumber,
    kakaoTalkId,
  }: BaseProfileType) => void;
}): ReactNode => {
  const [selectedAge, setSelectedAge] = useState<string>('');
  const list = Array.from({ length: 2005 - 1990 + 1 }, (_, i) =>
    (1990 + i).toString(),
  );
  const handleSelectedChange = (value: string) => {
    setSelectedAge(getAgeFromYear(value));
  };

  const profileForm = useProfileForm();
  const profileMemo = useMemo(() => {
    const { name, gender, genderReadOnly, age, phoneNumber, kakaoID, errors } =
      profileForm;
    return [
      {
        title: '이름',
        type: 'text',
        inputs: [{ ...name, placeholder: '실명을 입력해주세요.' }],
        error: errors.name?.message,
      },
      {
        title: '성별',
        type: 'readOnly',
        inputs: [
          {
            ...genderReadOnly,
            placeholder: '성별을 선택해주세요.',
          },
        ],
        error: errors.gender?.message,
        content: {
          title: '성별',
          type: 'radio',
          inputs: [
            { ...gender, value: '남성', label: '남성' },
            { ...gender, value: '여성', label: '여성' },
          ],
          error: errors.gender?.message,
        },
      },
      {
        title: '나이',
        type: 'readOnly',
        inputs: [
          {
            ...age,
            placeholder: '태어난 연도를 선택해주세요.',
          },
        ],
        error: errors.age?.message,
      },
      {
        title: '전화번호',
        type: 'text',
        inputs: [{ ...phoneNumber, placeholder: '01012345678' }],
        error: errors.phoneNumber?.message,
      },
      {
        title: '카카오톡 ID',
        type: 'text',
        inputs: [{ ...kakaoID, placeholder: '카카오톡 ID를 입력해 주세요.' }],
        error: errors.kakaoID?.message,
      },
    ];
  }, [profileForm]);
  const [renderContent, setRenderContent] = useState<RenderPropsType>({
    title: '',
    type: '',
    inputs: [],
    error: '',
  });

  const genderBottomSheet = useBottomSheet({
    title: '성별',
    mainButtonText: '선택',
    mainButtonDisabled: !profileForm.watch('gender'),
    mainButtonCallback: () => {
      const gender = profileForm.getValues('gender');
      profileForm.setValue('genderReadOnly', gender);
    },
    isSideButton: false,
  });
  const ageBottomSheet = useBottomSheet({
    title: '나이',
    mainButtonText: '선택',
    mainButtonDisabled: !selectedAge,
    mainButtonCallback: () => {
      profileForm.setValue('age', selectedAge);
    },
    isSideButton: false,
  });
  const nextButtondisabled = !(
    profileForm.watch('age') &&
    profileForm.watch('genderReadOnly') &&
    profileForm.watch('kakaoID') &&
    profileForm.watch('name') &&
    profileForm.watch('phoneNumber')
  );
  const nextButtonHandler = () => {
    // console.log(profileForm.errors.phoneNumber);
    // if (profileForm.errors.phoneNumber) return;
    // else {
    //   console.log(profileForm.errors);
    // }
  };
  return (
    <S.Form
      className="layout-padding"
      onSubmit={async (data) => {
        await profileForm.handleSubmit(data);
        if (!profileForm.errors.phoneNumber)
          props.onNext({
            name: profileForm.getValues('name'),
            genderType: profileForm.getValues('genderReadOnly') as
              | '남성'
              | '여성',
            age: parseInt(profileForm.getValues('age')) as number,
            phoneNumber: profileForm.getValues('phoneNumber'),
            kakaoTalkId: profileForm.getValues('kakaoID'),
          });
      }}
    >
      <S.Container>
        <S.IndicatorBox>
          <Indicator depth={3} currentLevel={1} />
        </S.IndicatorBox>
        <Text
          typograph={'headlineMedium'}
          color={'Blue90'}
          style={{ fontWeight: 700, width: '100%' }}
        >
          기본 정보를 입력해주세요
        </Text>
        {profileMemo.map(({ title, type, inputs, error, content }) => {
          return (
            <S.BasicProfileFirstInputWrapper key={title}>
              <Text typograph={'bodyMediumSemiBold'} color={'Blue70'}>
                {title}
              </Text>
              {type === 'text' &&
                inputs.map((input) => (
                  <BasicInput
                    key={input.name}
                    {...input}
                    style={{
                      fontSize: '1.6rem',
                      fontWeight: 500,
                      lineHeight: '2.4rem',
                    }}
                  />
                ))}
              {type === 'readOnly' &&
                inputs.map((input) => (
                  <BasicInput
                    readOnly
                    key={input.name}
                    {...input}
                    onClick={() => {
                      if (content) {
                        setRenderContent(content);
                        genderBottomSheet.open();
                      } else {
                        ageBottomSheet.open();
                      }
                    }}
                  />
                ))}
              {error && (
                <Text typograph={'labelMediumSemiBold'} color={'Red60'}>
                  {error}
                </Text>
              )}
            </S.BasicProfileFirstInputWrapper>
          );
        })}
      </S.Container>
      <S.ButtonContainer>
        <Button
          type="submit"
          buttonColor="primary"
          onClick={() => {
            nextButtonHandler();
          }}
          disabled={nextButtondisabled}
        >
          다음
        </Button>
      </S.ButtonContainer>
      <S.BottomSheet>
        {genderBottomSheet.render(
          <IntegratedInput
            title={renderContent.title}
            type={renderContent.type}
            inputs={renderContent.inputs}
            error={renderContent.error}
          />,
        )}
        {ageBottomSheet.render(
          <Picker list={list} onSelectedChange={handleSelectedChange} />,
        )}
      </S.BottomSheet>
    </S.Form>
  );
};
export default First;
