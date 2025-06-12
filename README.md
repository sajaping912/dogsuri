# 🎮 Mobile Galaga 게임

영어 학습 게임으로, 갤러그 스타일의 슈팅 게임과 영어 문장 학습을 결합했습니다.

## 📁 프로젝트 구조

- `index.html` - 메인 HTML 파일
- `script.js` - 게임 로직
- `content-config.js` - **콘텐츠 관리 파일** (영어 문장, 한글 번역)
- `style.css` - 스타일시트
- `sounds/96_audio/` - 영어 문장 오디오 파일 (1.mp3 ~ 96.mp3)
- `images/` - 게임 이미지 리소스

## 🔧 콘텐츠 수정 방법

### 1. 영어 문장과 오디오만 교체하는 경우

사용자가 제공하는 것:
- ✅ 새로운 영어 문장
- ✅ 해당 문장의 오디오 파일 (.mp3)

자동으로 처리되는 것:
- 🤖 한글 번역 (자동 생성)
- 🤖 영어 단어 번역 (패턴 기반)

### 2. 사용법

#### 브라우저 개발자 도구에서:

```javascript
// 새 문장 추가 (한글 번역 자동 생성)
CONTENT_UTILS.addSentence("What time do you wake up every morning?");

// 새 문장 추가 (한글 번역 직접 제공)
CONTENT_UTILS.addSentence("What time do you wake up every morning?", "매일 아침 몇 시에 일어나나요?");

// 기존 문장 교체 (인덱스 0번 문장)
CONTENT_UTILS.replaceSentence(0, "Hello, how are you today?");

// 현재 상태 확인
console.log("총 문장 개수:", CONTENT_UTILS.getTotalSentences());
console.log("첫 번째 문장:", GAME_SENTENCES[0]);
console.log("첫 번째 번역:", GAME_TRANSLATIONS[0]);
```

#### 오디오 파일 추가:

1. `sounds/96_audio/` 폴더에 새 오디오 파일 추가
2. 파일명은 숫자 순서로: `97.mp3`, `98.mp3`, `99.mp3` 등
3. 게임이 자동으로 인식

### 3. 예제 보기

브라우저 개발자 도구에서:
```javascript
gameContentExamples.showAll()
```

## 🎯 특징

- **모듈화된 콘텐츠 관리**: 모든 문장과 번역이 `content-config.js`에서 중앙 관리
- **자동 번역**: 영어 문장 입력 시 한글 번역 자동 생성
- **패턴 기반 번역**: 일반적인 질문/답변 패턴 인식
- **실시간 수정**: 브라우저에서 즉시 문장 추가/수정 가능
- **오디오 동기화**: 문장 번호와 오디오 파일 자동 매칭

## 🚀 실행 방법

1. `index.html` 파일을 브라우저에서 열기
2. START 버튼으로 게임 시작
3. 개발자 도구(F12)로 콘텐츠 관리 기능 사용
