# KELS 홈페이지 관리자 가이드

KELS (Korean Edutech & Learning Sciences Researcher Network) 홈페이지 관리 가이드입니다.

---

## 목차

1. [데이터 입력 — 한 곳에서 관리](#1-데이터-입력--한-곳에서-관리)
2. [운영진(Board) 수정](#2-운영진board-수정)
3. [행사(Events) 수정](#3-행사events-수정)
4. [프로그램(Programs) 수정](#4-프로그램programs-수정)
5. [기여자(Contributors) 수정](#5-기여자contributors-수정)
6. [색상 변경](#6-색상-변경)
7. [로고 색상 변경](#7-로고-색상-변경)
8. [소셜 링크 변경 (Discord / LinkedIn)](#8-소셜-링크-변경-discord--linkedin)
9. [연도 표기 변경](#9-연도-표기-변경)
10. [텍스트/번역 수정](#10-텍스트번역-수정)
11. [배포 방법](#11-배포-방법)

---

## 1. 데이터 입력 — 한 곳에서 관리

사이트의 **소셜 링크, 색상, 로고, 연도** 등 주요 설정은 아래 파일 하나에서 모두 변경할 수 있습니다.

```
src/data/siteConfig.ts
```

**데이터(운영진, 행사, 프로그램, 기여자)**는 아래 폴더의 파일들을 수정합니다.

```
src/data/board.ts          ← 운영진
src/data/events.ts         ← 행사
src/data/programs.ts       ← 프로그램
src/data/contributors.ts   ← 기여자
```

---

## 2. 운영진(Board) 수정

파일: `src/data/board.ts`

### 사람 추가/수정

각 `BoardMember` 객체에는 다음 필드가 있습니다.

```ts
{
  id: "고유-id",           // 중복 없는 임의의 문자열
  name: "홍길동",
  title: "Assistant Professor",
  affiliation: "서울대학교",
  bio: "소개글 (선택, 클릭 시 팝업에 표시)",
  links: {
    lab: "https://...",       // 연구실 링크 (없으면 생략)
    linkedin: "https://...",  // LinkedIn (없으면 생략)
    homepage: "https://...",  // 개인 홈페이지 (없으면 생략)
    scholar: "https://...",   // Google Scholar (없으면 생략)
  },
}
```

### 그룹(역할) 추가/수정

```ts
export const boardGroups: BoardGroup[] = [
  {
    id: "chair",
    role: "KELS Network Chair",   // 화면에 표시되는 역할명
    members: [/* BoardMember 배열 */],
  },
  // ... 그룹 추가 가능
];
```

#### 예시 — 새 그룹 추가

```ts
{
  id: "newsletter",
  role: "KELS Newsletter Editors",
  members: [
    {
      id: "nl-1",
      name: "김철수",
      title: "PhD Candidate",
      affiliation: "연세대학교",
    },
  ],
},
```

---

## 3. 행사(Events) 수정

파일: `src/data/events.ts`

### 예정된 행사 (Upcoming Events)

```ts
export const upcomingEvents: EventItem[] = [
  {
    id: "upcoming-1",        // 고유 id
    title: "행사 제목",
    dateUS: "NOV 4, 2024 (7PM EST)",   // 미국 시간 (선택)
    dateKR: "NOV 5, 2024 (9AM KST)",   // 한국 시간 (선택)
    location: "ZOOM",
    locationLabel: "Online",
    description: "행사 설명 (선택)",
    speakers: [
      "Dr. 홍길동 (Assistant Professor, 서울대)",
    ],
  },
];
```

- 행사가 없으면 배열을 비워 두세요: `export const upcomingEvents: EventItem[] = [];`

### 지난 행사 (Past Events)

연도별로 그룹화됩니다.

```ts
export const pastEvents: PastYear[] = [
  {
    year: "2025",
    events: [
      {
        id: "2025-1",
        title: "행사 제목",
        speakers: ["Dr. 홍길동 (...)"],
      },
    ],
  },
  {
    year: "2024",
    events: [ /* ... */ ],
  },
];
```

---

## 4. 프로그램(Programs) 수정

파일: `src/data/programs.ts`

```ts
export const programs: Program[] = [
  {
    id: "colloquium",
    title: "KELS Colloquium and Speakers Series",
    description: "프로그램 설명",
    items: [
      "Invited Speaker Series",
      "Special Webinars",
      // 항목 추가/삭제 가능
    ],
  },
];
```

---

## 5. 기여자(Contributors) 수정

파일: `src/data/contributors.ts`

```ts
export const contributorSections: ContributorSection[] = [
  {
    id: "small-talk-panels",
    title: "KELS Small Talk Panels",    // 섹션 제목
    people: [
      "Dr. 홍길동 (서울대학교, Korea)",
      // 이름 추가/삭제 가능
    ],
  },
];
```

---

## 6. 색상 변경

### 빠른 변경 (권장)

파일: `src/data/siteConfig.ts`

`lightColors` (라이트 모드)와 `darkColors` (다크 모드) 객체의 값을 수정하세요.

```ts
export const lightColors = {
  background: "oklch(0.99 0.004 95)",  // 페이지 배경
  foreground: "oklch(0.18 0.02 264)",  // 기본 텍스트
  primary: "oklch(0.32 0.09 264)",     // 주 색상 (버튼, 링크 강조)
  accent: "oklch(0.94 0.05 95)",       // 보조 강조 색상
  glow: "oklch(0.94 0.06 95)",         // 배경 글로우 색상
};
```

> **oklch 색상 선택기**: https://oklch.com  
> 원하는 색상을 선택하면 `oklch(밝기 채도 색조)` 값을 복사할 수 있습니다.

### 상세 색상 변경

`siteConfig.ts`에 없는 세부 색상(카드, 테두리, 버튼 등)을 바꾸려면:

파일: `src/styles.css`

`:root` 블록 (라이트 모드)과 `.dark` 블록 (다크 모드)에서 변수를 수정합니다.

```css
:root {
  --primary: oklch(0.32 0.09 264);   /* 주 색상 */
  --accent:  oklch(0.94 0.05 95);    /* 강조 색상 */
  --background: oklch(0.99 0.004 95);
  /* ... */
}

.dark {
  --primary: oklch(0.85 0.07 90);
  /* ... */
}
```

---

## 7. 로고 색상 변경

파일: `src/data/siteConfig.ts`

```ts
export const logoColors = {
  background: "#16224d",   // 로고 배경 사각형 색상 (현재: 딥 네이비)
  letterColor: "#ffffff",  // K, L, S 글자 색상
  accentLetter: "#f3c64b", // E 글자 강조 색상 (현재: 골드)
};
```

16진수(`#rrggbb`) 또는 `rgb()` 형식 모두 사용 가능합니다.

---

## 8. 소셜 링크 변경 (Discord / LinkedIn)

파일: `src/data/siteConfig.ts`

```ts
export const socialLinks = {
  discord: "https://discord.gg/your-invite-code",
  linkedin: "https://www.linkedin.com/company/kels-network",
};
```

두 링크 모두 푸터 아이콘과 홈 페이지의 Discord 버튼에 자동 반영됩니다.

---

## 9. 연도 표기 변경

파일: `src/data/siteConfig.ts`

```ts
export const siteYear = "2026";
```

이 값을 바꾸면 푸터("2026 KELS Board"), 운영진 페이지 제목("2026 Board Members"), 저작권 표기("© 2026") 모두 자동으로 업데이트됩니다.

---

## 10. 텍스트/번역 수정

파일: `src/lib/i18n.tsx`

영문(`en`)과 한국어(`ko`) 텍스트 사전이 있습니다.

```ts
const en = {
  home: {
    headline: "Korean Edutech &\nLearning Sciences Researcher Network",
    welcome: "Welcome Aboard!",
    intro: "KELS is ...",
    discord: "Join Our Discord!",
  },
  // ...
};

const ko: Dict = {
  home: {
    headline: "한국 에듀테크 & 학습과학 연구자 네트워크",
    // ...
  },
};
```

같은 키(`home.headline` 등)를 `en`과 `ko` 양쪽에서 수정해 주세요.

---

## 11. 배포 방법

변경 사항은 `main` 브랜치에 push 하면 GitHub Actions가 자동으로 빌드하고 배포합니다.

```bash
git add .
git commit -m "데이터 업데이트: ..."
git push origin main
```

GitHub Actions 진행 상황은 저장소 > **Actions** 탭에서 확인할 수 있습니다.

---

## 파일 구조 요약

```
src/
├── data/
│   ├── siteConfig.ts      ← ✅ 소셜 링크, 색상, 로고, 연도 (한 곳에서 관리)
│   ├── board.ts           ← 운영진 데이터
│   ├── events.ts          ← 행사 데이터
│   ├── programs.ts        ← 프로그램 데이터
│   └── contributors.ts    ← 기여자 데이터
├── lib/
│   └── i18n.tsx           ← 영문/한국어 텍스트
└── styles.css             ← 전체 색상 변수 (상세 조정 시)
```
