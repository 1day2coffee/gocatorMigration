# Gocator Migration

현대적인 웹 애플리케이션을 위한 최고의 기술 스택으로 구축된 디자인 중심의 플랫폼입니다.

## 🚀 기술 스택

- **Next.js 15.3** - Turbopack과 함께하는 초고속 개발 환경
- **React 18.2** - 최신 React 기능과 서버 컴포넌트
- **TypeScript 5** - 타입 안전성과 개발자 경험 향상
- **Tailwind CSS 3.3** - 유틸리티 퍼스트 CSS 프레임워크
- **Supabase** - 실시간 데이터베이스와 인증 시스템
- **Figma** - 디자인 시스템과 실시간 연동

## 🎨 디자인 시스템

이 프로젝트는 Figma 디자인 시스템과 완벽하게 연동되도록 설계되었습니다:

- **색상 팔레트**: Figma 디자인 토큰 기반 색상 시스템
- **타이포그래피**: Inter, JetBrains Mono 폰트
- **컴포넌트**: 재사용 가능한 UI 컴포넌트 라이브러리
- **애니메이션**: 부드러운 전환과 인터랙션

## 📦 설치 및 실행

### 필수 요구사항

- Node.js 18.17.0 이상
- Yarn 패키지 매니저

### 설치

```bash
# 의존성 설치
yarn install
```

### 개발 서버 실행

```bash
# 개발 서버 시작 (Turbopack 사용)
yarn dev
```

### 빌드

```bash
# 프로덕션 빌드
yarn build

# 프로덕션 서버 시작
yarn start
```

### 코드 품질

```bash
# 린트 검사
yarn lint

# 타입 체크
yarn type-check
```

## 🏗️ 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # 글로벌 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 메인 페이지
├── components/            # 재사용 가능한 컴포넌트
│   └── ui/               # UI 컴포넌트
├── lib/                  # 유틸리티 함수
└── types/                # TypeScript 타입 정의
```

## 🎯 주요 기능

### 1. Turbopack 지원
- Next.js 15.3의 Turbopack으로 초고속 개발 환경
- 빠른 HMR (Hot Module Replacement)

### 2. TypeScript 5
- 엄격한 타입 체크
- 향상된 개발자 경험
- 런타임 오류 사전 방지

### 3. Figma 연동
- 디자인 토큰 기반 색상 시스템
- 일관된 UI/UX 디자인
- 실시간 디자인-개발 협업

### 4. Supabase 통합
- PostgreSQL 기반 데이터베이스
- 실시간 인증 시스템
- Row Level Security

### 5. 반응형 디자인
- 모바일 퍼스트 접근법
- Tailwind CSS 유틸리티 클래스
- 접근성 고려

## 🔧 환경 설정

### 환경 변수

`.env.local` 파일을 생성하고 다음 변수들을 설정하세요:

```env
# Supabase 설정
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# 기타 설정
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Figma 연동

1. Figma 디자인 파일에서 디자인 토큰 추출
2. `tailwind.config.ts`에서 색상 팔레트 업데이트
3. 컴포넌트 스타일 동기화

## 🚀 배포

### Vercel (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### 기타 플랫폼

```bash
# 빌드
yarn build

# 정적 파일 생성
yarn export
```

## 🤝 기여하기

1. 이 저장소를 포크하세요
2. 기능 브랜치를 생성하세요 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋하세요 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 푸시하세요 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성하세요

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 지원

프로젝트에 대한 질문이나 제안사항이 있으시면 이슈를 생성해 주세요.

---

**Gocator Migration Team** 🚀 