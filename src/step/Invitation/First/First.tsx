import { S } from './style';
import Button from '../../../components/common/Button';
import InviteButtonWrapper from '../../../components/feature/InviteButtonWrapper';
import { useState } from 'react';
import Text from '../../../components/common/Text';
import Snow from '../../../lib/assets/icon/snow-16.svg';

const First = (props: {
  onNextSecond: () => void;
  onNextThird: () => void;
}) => {
  const [isLeader, setIsLeader] = useState<boolean | undefined>(undefined);

  return (
    <>
      <S.Container className="layout-padding">
        <S.MainContainer>
          <S.HeaderContainer>
            <InviteButtonWrapper
              isLeader={isLeader}
              setIsLeader={setIsLeader}
            />
            <Text typograph={'labelMediumMedium'} color={'Blue40'}>
              팅은 동성끼리만 결성할 수 있어요!
            </Text>
          </S.HeaderContainer>
          <S.BodyContainer>
            <Text typograph={'titleLarge'} color={'Blue90'}>
              팅 결성은 어떻게 진행되나요?
            </Text>
            <S.ContentsWrapper>
              <S.ListWrapper>
                <S.ListOption />
                <img src={Snow} alt="" />
                <img src={Snow} alt="" />
                <img src={Snow} alt="" />
              </S.ListWrapper>
              <S.Div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '28px',
                }}
              >
                <S.TextWrapper>
                  <Text typograph={'titleSmall'} color={'Blue90'}>
                    역할선택
                  </Text>
                  <S.Div>
                    <Text typograph={'bodyMediumMedium'} color={'Blue70'}>
                      3명 중 1명이 팅장,
                    </Text>
                    <Text typograph={'bodyMediumMedium'} color={'Blue70'}>
                      나머지 2명이 팅원을 선택해요.
                    </Text>
                  </S.Div>
                </S.TextWrapper>
                <S.TextWrapper>
                  <Text typograph={'titleSmall'} color={'Blue90'}>
                    팅 코드 공유
                  </Text>
                  <S.Div>
                    <Text typograph={'bodyMediumMedium'} color={'Blue70'}>
                      팅장이 팅을 개설하여 팅코드를 발급하고
                    </Text>
                    <Text typograph={'bodyMediumMedium'} color={'Blue70'}>
                      팅원들에게 코드를 공유해요.
                    </Text>
                  </S.Div>
                </S.TextWrapper>
                <S.TextWrapper>
                  <Text typograph={'titleSmall'} color={'Blue90'}>
                    팅 결성
                  </Text>
                  <S.Div>
                    <Text typograph={'bodyMediumMedium'} color={'Blue70'}>
                      팅원들은 공유 받은 코드를 입력하여
                    </Text>
                    <Text typograph={'bodyMediumMedium'} color={'Blue70'}>
                      팅장의 팅에 입장해요.
                    </Text>
                  </S.Div>
                </S.TextWrapper>
              </S.Div>
            </S.ContentsWrapper>
          </S.BodyContainer>
        </S.MainContainer>
        <S.ButtonWrapper>
          <Button
            buttonColor="primary"
            disabled={isLeader === undefined}
            onClick={() => {
              if (isLeader) {
                props.onNextThird();
              } else {
                props.onNextSecond();
              }
            }}
          >
            다음
          </Button>
        </S.ButtonWrapper>
      </S.Container>
    </>
  );
};
export default First;
