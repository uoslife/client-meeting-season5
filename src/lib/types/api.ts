export const ERROR_CODE = {
  // api/verification/send-email
  E01: '유효하지 않은 이메일 형식입니다. 다시 시도해 주세요.',
  E02: '유효하지 않은 이메일 형식입니다. 다시 시도해 주세요.',
  E04: '일일 인증 횟수를 초과했습니다. (5/5)',

  // api/verification/verify-email
  E03: '인증 코드가 일치하지 않습니다.',
  E05: '일일 인증 횟수를 초과했습니다. (5/5)',

  // api/meeting/{teamType}/create
  U02: '비정상적인 접근입니다. 돌아가시오.',
  M02: '신청정보가 이미 존재합니다.',
  //TODO: n자리 m자리 우진이한테 물어보기
  M11: '팀 이름이 n자리 이상 m자리 이하여야 합니다.',
  M12: '팀 코드 생성에 실패했습니다. 다시 시도해 주세요.',

  // api/meeting/{teamType}/info
  M06: '팀이 존재하지 않습니다.',
};
