# ui-poc

**ui-poc**는 Radix UI와 Shadcn UI를 비교하여 팀과 비즈니스 요구 사항에 가장 적합한 UI 라이브러리를 선택하기 위한 프로젝트입니다. Figma 디자인을 기반으로 컴포넌트를 개발하며, 각
라이브러리의 커스터마이징 가능성, 접근성 지원, 유지보수성을 평가하는 것이 목적입니다.

## 프로젝트 구조

- **radix-poc**: Radix UI를 사용하여 컴포넌트를 구현한 폴더입니다.
- **shadcn-poc**: Shadcn UI를 사용하여 동일한 컴포넌트를 구현한 폴더입니다.

각 폴더는 동일한 컴포넌트 구조를 가지며, 주요 파일은 다음과 같습니다.

```plaintext
ui-poc
├── radix-poc                # Radix UI를 활용한 POC
│   ├── src
│   │   ├── components       # Radix UI 기반의 컴포넌트
│   │   ├── stories          # Storybook 스토리 파일
│   │   ├── lib              # 유틸리티 파일
└── shadcn-poc               # Shadcn UI를 활용한 POC
    ├── src
    │   ├── components       # Shadcn UI 기반의 컴포넌트
    │   ├── stories          # Storybook 스토리 파일
    └────── lib              # 유틸리티 파일
```

## 주요 컴포넌트

1. **CustomButton** - 사용자 정의 버튼 컴포넌트
2. **CustomDialog** - 사용자 정의 다이얼로그 컴포넌트
3. **CustomSelect** - 사용자 정의 선택 컴포넌트
4. **CustomTabs** - 사용자 정의 탭 컴포넌트

## 설치 및 실행 방법

### 사전 요구 사항

- Node.js

### 설치

1. 레포지토리를 클론합니다.

   ```bash
   git clone <repository-url>
   cd ui-poc
   ```

2. 패키지를 설치합니다.

   ```bash
   npm install
   ```

3. 각 폴더에서 프로젝트를 실행할 수 있습니다. 예를 들어, `radix-poc`를 실행하려면:

   ```bash
   cd radix-poc
   npm run dev
   ```

### Storybook 실행

각 컴포넌트는 Storybook을 통해 독립적으로 확인할 수 있습니다. Storybook을 실행하려면 다음 명령어를 사용하세요.

```bash
npm run storybook
```
