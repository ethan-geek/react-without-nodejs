# Node.js 없이 React 시작하기 예제 코드

이 프로젝트는 Node.js나 복잡한 빌드 도구 없이 순수한 HTML, CSS, JavaScript를 사용하여 React 애플리케이션을 구축하는 방법을 보여주는 간단한 예제입니다. 이 코드는 `npx create-react-app`으로 프로젝트를 생성했을 때 실행하는 결과와 동일합니다.

## 프로젝트 설명

이 예제는 React의 UMD(Universal Module Definition) 빌드를 사용하여 단일 HTML 파일에서 React 애플리케이션을 실행하는 방법을 보여줍니다. 이 접근 방식은 React를 빠르게 시작하거나 간단한 데모를 만들 때 유용할 수 있습니다.

주요 특징:

- 단일 HTML 파일로 구성된 React 애플리케이션
- CDN을 통한 React 및 ReactDOM 로딩
- 인라인 JavaScript를 사용한 React 컴포넌트 정의
- 인라인 CSS를 통한 스타일링
- Create React App과 동일한 초기 화면 구현

## 사용 방법

1. 제공된 HTML 코드를 `.html` 파일로 저장합니다.
2. 웹 브라우저에서 해당 HTML 파일을 엽니다.

이게 전부입니다! 별도의 설치나 빌드 과정이 필요 없습니다.

## 코드 설명

이 예제는 다음과 같은 주요 부분으로 구성되어 있습니다:

- React와 ReactDOM의 UMD 빌드를 CDN에서 로드
- `App` 컴포넌트를 JavaScript로 정의
- 인라인 스타일을 사용하여 기본적인 React 애플리케이션 스타일링
- `ReactDOM.createRoot`를 사용하여 React 18의 새로운 루트 API 활용
- Create React App의 초기 화면과 동일한 레이아웃 및 애니메이션 구현
