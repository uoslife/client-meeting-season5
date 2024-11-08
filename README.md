# 시대팅5 프론트 엔드 개발 문서
해당 문서는 시대팅5 개발 과정을 정리한 문서로, 시간 순으로 나열하였습니다. 각 작업의 필요성과 해당 작업을 선택한 이유에 대해서 서술하고 정리했습니다. 프로젝트를 처음 시작 할때 드는 의문을 정리하고 여러 방법들을 찾아본 후 프로젝트 성격에 맞는 방법을 선택했습니다. 

## 프로젝트를 시작하기 전
프로젝트를 시작할때 목표는 모든 개발자가 깃허브를 사용하면서 똑같은 환경에서 개발하며, 개발 이외의 것들을 신경쓰지 않도록 하는 것으로 설정하였습니다. 

### .gitignore
깃를 사용하다보면 종종 필요없는 파일(시스템 파일 등등)이 들어가곤 합니다. 이를 사전에 방지하기 위해서 [gitignore.io](https://www.toptal.com/developers/gitignore)를 활용했습니다. 키워드로는 `windows`,`mac`을 입력하여 파일을 생성했습니다.

### git convention
모든 개발자가 커밋 내용을 일관되게 작성할 수 있도록 컨벤션을 정의하였습니다. 이를 통해 작업 내용을 쉽게 파악할 수 있으며, 의도적으로 작업 단위를 분리할 수 있도록 하였습니다. [Conventional Commits](https://www.conventionalcommits.org/)을 기반으로 하였고 세부 내용은 다음과 같습니다.
```text

<type>[optional scope]: <description>

[optional body]

[optional footer(s)]

```

#### type

|타입|의미|
|---|---|
|`build`|빌드 관련 작업 수행 (배포 파일 생성 등)|
|`chore`|프로젝트 설정 관련 작업 수행|
|`ci`|CI/CD 파이프라인 관련 작업 수행|
|`docs`|문서 작성 또는 수정|
|`feat`|새로운 기능 추가|
|`fix`|버그 수정|
|`refactor`|코드 리팩토링|
|`style`|스타일 변경|
|`test`|테스트|
|`rename`|파일 및 폴더 이름 재설정 및 이동|
|`!HOTFIX`|릴리즈 버전 치명적인 버그 수정|

#### extra
header-max-length: 100
body-max-length: 100

### git branch 전략
위 작업까지 다 완료했다면 이제 깃을 효율적으로 사용하기 위해서 깃 브랜치 전략에 대해서 정해야합니다. git flow, github flow 등등 여러 방법이 있지만 그 중 git flow를 선택하였습니다. 사실 이것은 팀원이 2명이기 때문에 팀과 맞지 않는 전략이지만 연습삼아 사용해보기로 하였습니다. 특히 이벤트성 프로젝트를 진행할때도 적합하지는 않다고 생각합니다.

#### git-flow

해당 프로젝트에서 쓸 브랜치를 정의하겠습니다.

|부모 브랜치|브랜치 명|역할|병합 브랜치|
|---|---|---|---|
||`main`|product 서버에 배포 및 버전 관리||
|`master`|`develop`|각각의 기능 개발이 끝난 후 취합||
|`develop`|`feature/*`|기능 개발|`develop`|
|`develop`|`release`|배포 테스트 및 QA 진행|`develop`,`main`|
|`main`|`hotfix`|product 서버에서 문제가 생겼을 시에 처리|—|

## 프로젝트 셋업
프론트 개발은 기본적으로 REACT로 진행하며 typescript로 개발합니다. CRA대신 VITE를 사용합니다. 
```text
vite: 5.4.8
react: 18.3.1
typescript: 5.5.3
```

### ESLint
ESLint는 코드의 문제 패턴 식별을, Prettier는 코드 포맷팅을 담당합니다.
이 때 ESLint와 Prettier의 포맷팅 충돌을 방지하기 위해 `eslint-config-prettier` 라이브러리를 활용했습니다.
`eslint-config-prettier` 라이브러리는 Prettier와 충돌하는 ESLint 포맷팅 규칙을 off 처리합니다.

나머지 규칙은 ESLint 초기화 시 추천하는 규칙입니다.

### Prettier
```
{
  "printWidth": 80,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "semi": true,
  "useTabs": false,
  "endOfLine": "lf"
}
```
`prettier` 설정은 다음과 같습니다. `useTabs` 속성을 true로 설정하면 editor 상에서 `tabWidth` 설정이 적용안되는 것처럼 보이는 이슈가 있으므로 default 값인 false를 유지합니다.

### Settings
`settings.json` 파일에서는에는 git clone 시 모든 개발자가 동일한 개발환경을 갖출 수 있도록 editor를 수정합니다.

json 내부 속성은 editor에서 파일 저장 시 코드를 자동 포맷팅하도록 설정합니다.

## 프로젝트 시작하며
### 폴더 구조 

```text
src/
├── assets/
│   ├── fonts/
│   ├── images/
│   └── styles/
├── components/
│   ├── common/
│   └── feature/
├── hooks/
├── mappers/
├── pages/
├── store/
├── types/
└── utils/
```

+ `assets`: 프로젝트에 필요한 이미지, 폰트, 디자인 파일이 위치한 폴더입니다.
+ `components`: 컴포넌트가 위치한 폴더입니다.
+ `hooks`: 커스텀 훅이 위치한 폴더입니다.
+ `mappers`: 서버의 데이터 변환을 위한 인코더, 디코더 파일이 위치한 폴더입니다.
+ `pages`: 페이지가 위치한 폴더입니다.
+ `store`: 전역 상태를 관리하는 폴더입니다.
+ `types`: 타입들을 관리하는 폴더입니다.
+ `utils`: 자주 쓰는 함수 혹은 상수가 정의되어 있습니다.