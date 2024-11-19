import Checkbox from '../../common/Checkbox';
import { S } from './style';
import Text from '../../common/Text';

interface InterestOptionsPropsType {
  handler: () => void;
  interestOptions: string[];
  customOptions: string[];
  onSelectedChange: (selected: string) => void;
}

const InterestOptions = ({
  onSelectedChange,
  interestOptions,
  customOptions,
  handler,
}: InterestOptionsPropsType) => {
  const options = [
    '동아리',
    '대외활동',
    '취업',
    '교환학생',
    '장학금',
    '요리',
    '그림 그리기',
    '자전거',
    '피트니스',
    '미용',
    '산책',
    '자기계발',
    '레져',
    '전시회 관람',
    '드라이브',
    '카페가기',
    '공연 관람',
    '드라마',
    '애니',
    'IT',
    '스포츠/운동',
    '술',
    '게임',
    '악기 연주',
    '봉사활동',
    '문학',
    '독서',
    '정치',
    '댄스',
    '여행',
    '외국어/어학',
    '반려 동물',
    '노래 부르기',
    '재테크',
    '쇼핑',
    '웹툰',
    '사진 촬영',
    '글쓰기',
  ];
  return (
    <S.Container>
      <S.FlexContainer>
        <S.Button onClick={handler}>
          <Text typograph={'bodyMediumMedium'} color={'Blue70'}>
            + 나만의 항목 추가
          </Text>
        </S.Button>
        <S.CheckboxContainer>
          {customOptions.map((option) => {
            return (
              <S.CheckboxWrapper key={option}>
                <Checkbox
                  value={option}
                  label={option}
                  onChange={(e) => {
                    onSelectedChange(option);
                    if (interestOptions.length > 4) {
                      onSelectedChange(option);
                      e.currentTarget.checked = false;
                    }
                  }}
                  checked={interestOptions.includes(option)}
                />
              </S.CheckboxWrapper>
            );
          })}
        </S.CheckboxContainer>
      </S.FlexContainer>
      <S.CheckboxContainer>
        {options.map((option) => {
          return (
            <S.CheckboxWrapper key={option}>
              <Checkbox
                value={option}
                label={option}
                onChange={(e) => {
                  onSelectedChange(option);
                  if (interestOptions.length > 4) {
                    onSelectedChange(option);
                    e.currentTarget.checked = false;
                  }
                }}
              />
            </S.CheckboxWrapper>
          );
        })}
      </S.CheckboxContainer>
    </S.Container>
  );
};
export default InterestOptions;
