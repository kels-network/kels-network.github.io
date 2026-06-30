import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { siteYear } from "../data/siteConfig";

export type Lang = "en" | "ko";

type Dict = typeof en;

const en = {
  nav: {
    home: "Home",
    events: "Events",
    programs: "Programs",
    contributors: "Contributors",
    admin: "Admin",
    toggleLang: "한국어로 전환",
    toggleTheme: "Toggle dark mode",
  },
  footer: {
    board: `${siteYear} KELS Board`,
    rights: `© ${siteYear}. All rights reserved.`,
  },
  home: {
    headline: "Korean Edutech &\nLearning Sciences Researcher Network",
    welcome: "Welcome Aboard!",
    intro:
      "KELS (Korean Edutech/Learning Sciences Researcher Network) is a research network where researchers in Korea in the fields of Educational Technology and Learning Sciences freely communicate and collaborate. We pursue cooperation rather than competition, and diversity rather than hierarchy and uniformity.",
    discord: "Join Our Discord!",
  },
  events: {
    title: "Events",
    upcoming: "Upcoming Events",
    past: "Past Events",
    speakers: "Speakers",
    online: "Online",
    posterPlaceholder: "Event poster",
  },
  programs: {
    title: "Programs",
    learnMore: "Learn more",
    imagePlaceholder: "Image",
  },
  contributors: {
    title: "Contributors",
    intro:
      "We want to express special appreciation and gratitude for your invaluable contribution as volunteers on the KELS panel/Open Access Guide publication projects. Your dedication, enthusiasm, and commitment have made a significant impact on the success of this vibrant and growing community. From the very beginning, it was clear that your knowledge, expertise, and passion were integral to the smooth running and overall success of the events. Your willingness to share your insights and experiences with the community members and added tremendous value and created an enriching and memorable experience for all.",
    signature: "Board of KELS",
  },
  board: {
    title: "Board Members",
    year: `${siteYear} Board Members`,
    close: "Close",
  },
};

const ko: Dict = {
  nav: {
    home: "홈",
    events: "행사",
    programs: "프로그램",
    contributors: "기여자",
    admin: "운영진",
    toggleLang: "Switch to English",
    toggleTheme: "다크 모드 전환",
  },
  footer: {
    board: `${siteYear} KELS 운영위원회`,
    rights: `© ${siteYear}. All rights reserved.`,
  },
  home: {
    headline: "한국 에듀테크 & 학습과학 연구자 네트워크",
    welcome: "환영합니다!",
    intro:
      "KELS(한국 에듀테크/학습과학 연구자 네트워크)는 교육공학 및 학습과학 분야의 한국 연구자들이 자유롭게 소통하고 협력하는 연구 네트워크입니다. 우리는 경쟁보다 협력을, 위계와 획일성보다 다양성을 추구합니다.",
    discord: "디스코드 참여하기!",
  },
  events: {
    title: "행사",
    upcoming: "예정된 행사",
    past: "지난 행사",
    speakers: "발표자",
    online: "온라인",
    posterPlaceholder: "행사 포스터",
  },
  programs: {
    title: "프로그램",
    learnMore: "자세히 보기",
    imagePlaceholder: "이미지",
  },
  contributors: {
    title: "기여자",
    intro:
      "KELS 패널 / 오픈 액세스 가이드 출판 프로젝트에 자원봉사자로 참여해 주신 여러분의 소중한 기여에 깊은 감사와 고마움을 전합니다. 여러분의 헌신과 열정, 그리고 노력은 이 활기차고 성장하는 커뮤니티의 성공에 큰 영향을 주었습니다. 처음부터 여러분의 지식과 전문성, 열정이 행사의 원활한 운영과 성공에 핵심적이었음이 분명했습니다. 여러분이 커뮤니티 구성원들과 통찰과 경험을 기꺼이 나누어 주신 덕분에 모두에게 풍요롭고 기억에 남는 경험이 되었습니다.",
    signature: "KELS 운영위원회 일동",
  },
  board: {
    title: "운영진",
    year: `${siteYear} 운영위원회`,
    close: "닫기",
  },
};

const dict: Record<Lang, Dict> = { en, ko };

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: Dict;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "kels-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "en" || stored === "ko") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  };

  const toggleLang = () => setLang(lang === "en" ? "ko" : "en");

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggleLang, t: dict[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
