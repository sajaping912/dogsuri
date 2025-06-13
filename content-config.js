// ===================================================================
// 게임 콘텐츠 설정 파일
// 이 파일에서 영어 문장, 한국어 번역, 오디오 설정을 모두 관리합니다
// ===================================================================

// 🎯 영어 문장 배열 (96개)
const GAME_SENTENCES = [
  "Where will we find those yummy berries?", // 1.txt
  "We will swing on that long vine!", // 2.txt
  "Why will you choose that wobbly vine?", // 3.txt
  "It will be a super speedy ride!", // 4.txt
  "Who will go first on the vine?", // 5.txt
  "I will! I am the bravest penguin!", // 6.txt
  "What will happen if the vine breaks?", // 7.txt
  "We will just bounce like rubber balls!", // 8.txt
  "How will we get back if successful?", // 9.txt
  "We will build a super berry raft!", // 10.txt
  "When will we eat those juicy berries?", // 11.txt
  "We will eat them very soon, yum!", // 12.txt
  "What won't you share from your lunchbox today?", // 13.txt
  "I won't share my jelly because it's special.", // 14.txt
  "Why won't your sister play tag with us?", // 15.txt
  "She won't play because she feels too sleepy.", // 16.txt
  "When won't we have to clean our playroom?", // 17.txt
  "We won't clean it if it's already tidy.", // 18.txt
  "Where won't we be allowed to bring snacks?", // 19.txt
  "We won't bring them into the library room.", // 20.txt
  "Who won't join us at the zoo tomorrow?", // 21.txt
  "Grandpa won't join us because of his knee.", // 22.txt
  "How won't the toy car break again soon?", // 23.txt
  "It won't break if we don't crash it hard.", // 24.txt
  "What would you do with a flying carpet?", // 25.txt
  "I would fly to grandma's house for cookies.", // 26.txt
  "Why would he cry after watching that movie?", // 27.txt
  "He would cry because the puppy got lost.", // 28.txt
  "When would we visit the underwater castle?", // 29.txt
  "We would visit it during our summer dream.", // 30.txt
  "Where would you go if you had fairy wings?", // 31.txt
  "I would fly to the rainbow island in sky.", // 32.txt
  "How would we talk to a tiny forest elf?", // 33.txt
  "We would whisper and use our magic ring.", // 34.txt
  "Who would help if our kite got stuck again?", // 35.txt
  "Dad would help us with his long stick.", // 36.txt
  "What wouldn't you eat even if you were hungry?", // 37.txt
  "I wouldn't eat broccoli ice cream, it's yucky!", // 38.txt
  "Why wouldn't your teddy bear come to tea time?", // 39.txt
  "He wouldn't come because he was too sleepy.", // 40.txt
  "When wouldn't we go outside to play together?", // 41.txt
  "We wouldn't go if it started thunderstorming.", // 42.txt
  "Where wouldn't you hide your secret treasure box?", // 43.txt
  "I wouldn't hide it in the bathroom, too wet.", // 44.txt
  "How wouldn't the snowman melt so quickly today?", // 45.txt
  "He wouldn't melt if we built him in shade.", // 46.txt
  "Who wouldn't laugh at your funny dance moves?", // 47.txt
  "Even the teacher wouldn't stop laughing today.", // 48.txt
  "What can you do with this shiny rock?", // 49.txt
  "I can make it my secret magic stone.", // 50.txt
  "Why can we not play outside right now?", // 51.txt
  "It is raining and Mommy said it's muddy.", // 52.txt
  "When can I see your new puppy again?", // 53.txt
  "You can come over after lunch tomorrow.", // 54.txt
  "Where can we hide from the space aliens?", // 55.txt
  "We can hide behind the big backyard tree.", // 56.txt
  "Who can help me fix my toy robot?", // 57.txt
  "My dad can fix it after his dinner.", // 58.txt
  "How can you jump so high like that?", // 59.txt
  "I practiced every day on my trampoline.", // 60.txt
  "What can't you eat before dinner time?", // 61.txt
  "I can't eat cookies before dinner time.", // 62.txt
  "Why can't you open the cookie jar?", // 63.txt
  "I can't open it because it's locked tight.", // 64.txt
  "When can't we go into the kitchen?", // 65.txt
  "We can't go there when Mom is cooking.", // 66.txt
  "Where can't he hide the cookie crumbs?", // 67.txt
  "He can't hide them under the couch again.", // 68.txt
  "Who can't keep the cookie secret long?", // 69.txt
  "She can't keep secrets longer than two hours.", // 70.txt
  "How can't they hear the cookie crunch?", // 71.txt
  "They can't hear it with cartoons playing loudly.", // 72.txt
  "What could you find under the big bed?", // 73.txt
  "I could find my teddy bear under there.", // 74.txt
  "Why could he be hiding from us now?", // 75.txt
  "He could be scared of the vacuum cleaner noise.", // 76.txt
  "When could we start looking for him?", // 77.txt
  "We could start right after our afternoon snack.", // 78.txt
  "Where could it have gone last night?", // 79.txt
  "It could have rolled behind the toy chest.", // 80.txt
  "Who could have taken it to the garden?", // 81.txt
  "You could have taken it while playing outside.", // 82.txt
  "How could we bring him back safely?", // 83.txt
  "We could carry him in your superhero backpack.", // 84.txt
  "What couldn't we play with in the rain?", // 85.txt
  "We couldn't play with the paper kite outside.", // 86.txt
  "Why couldn't you come to my puppet show?", // 87.txt
  "I couldn't come because my boots were missing.", // 88.txt
  "When couldn't they start the backyard race?", // 89.txt
  "They couldn't start when the thunder was loud.", // 90.txt
  "Where couldn't she set up her lemonade stand?", // 91.txt
  "She couldn't set it up under the dripping tree.", // 92.txt
  "Who couldn't join us for the snack picnic?", // 93.txt
  "He couldn't join us because he caught a cold.", // 94.txt
  "How couldn't we keep our socks from getting wet?", // 95.txt
  "We couldn't keep them dry without rain boots on." // 96.txt
];

// 🇰🇷 한국어 번역 배열 (96개)
const GAME_TRANSLATIONS = [
  "그 맛있는 베리들을 어디서 찾을 건가요?", // 1.txt 번역
  "우리는 그 긴 덩굴을 타고 그네를 탈 거예요!", // 2.txt 번역
  "왜 그 흔들거리는 덩굴을 선택할 건가요?", // 3.txt 번역
  "정말 빠른 놀이가 될 거예요!", // 4.txt 번역
  "덩굴에서 누가 먼저 갈 건가요?", // 5.txt 번역
  "제가요! 저는 가장 용감한 펭귄이에요!", // 6.txt 번역
  "덩굴이 부러지면 어떻게 될까요?", // 7.txt 번역
  "우리는 고무공처럼 튕길 거예요!", // 8.txt 번역
  "성공하면 어떻게 돌아올 건가요?", // 9.txt 번역
  "멋진 베리 뗏목을 만들 거예요!", // 10.txt 번역
  "그 즙이 많은 베리들을 언제 먹을 건가요?", // 11.txt 번역
  "곧 먹을 거예요, 맛있겠다!", // 12.txt 번역
  "오늘 점심 도시락에서 무엇을 나눠주지 않을 건가요?", // 13.txt 번역
  "내 젤리는 특별해서 나눠주지 않을 거예요.", // 14.txt 번역
  "언니는 왜 우리랑 술래잡기를 안 하나요?", // 15.txt 번역
  "너무 졸려서 안 할 거예요.", // 16.txt 번역
  "언제 놀이방 청소를 안 해도 되나요?", // 17.txt 번역
  "이미 깨끗하면 청소 안 할 거예요.", // 18.txt 번역
  "어디에 간식을 가져가면 안 되나요?", // 19.txt 번역
  "도서관에는 가져가지 않을 거예요.", // 20.txt 번역
  "내일 동물원에 누가 같이 안 가나요?", // 21.txt 번역
  "할아버지는 무릎 때문에 같이 안 가실 거예요.", // 22.txt 번역
  "장난감 자동차가 어떻게 하면 곧 다시 고장 나지 않을까요?", // 23.txt 번역
  "세게 부딪치지 않으면 고장 나지 않을 거예요.", // 24.txt 번역
  "하늘을 나는 양탄자가 있다면 무엇을 할 건가요?", // 25.txt 번역
  "할머니 댁에 쿠키 먹으러 날아갈 거예요.", // 26.txt 번역
  "그는 왜 그 영화를 보고 울었을까요?", // 27.txt 번역
  "강아지를 잃어버려서 울었을 거예요.", // 28.txt 번역
  "언제 수중 성을 방문할 건가요?", // 29.txt 번역
  "여름 꿈속에서 방문할 거예요.", // 30.txt 번역
  "요정 날개가 있다면 어디로 갈 건가요?", // 31.txt 번역
  "하늘에 있는 무지개 섬으로 날아갈 거예요.", // 32.txt 번역
  "작은 숲 속 요정과 어떻게 이야기할 건가요?", // 33.txt 번역
  "속삭이고 마법 반지를 사용할 거예요.", // 34.txt 번역
  "연이 다시 걸리면 누가 도와줄까요?", // 35.txt 번역
  "아빠가 긴 막대기로 도와주실 거예요.", // 36.txt 번역
  "배가 고파도 절대 먹지 않을 것은 무엇인가요?", // 37.txt 번역
  "브로콜리 아이스크림은 안 먹을 거예요, 맛없어요!", // 38.txt 번역
  "곰 인형은 왜 티타임에 오지 않았나요?", // 39.txt 번역
  "너무 졸려서 오지 않았을 거예요.", // 40.txt 번역
  "언제 밖에 나가서 같이 놀지 않을 건가요?", // 41.txt 번역
  "천둥 번개가 치기 시작하면 안 나갈 거예요.", // 42.txt 번역
  "비밀 보물 상자를 어디에 숨기지 않을 건가요?", // 43.txt 번역
  "화장실에는 숨기지 않을 거예요, 너무 축축해요.", // 44.txt 번역
  "눈사람이 오늘 어떻게 하면 빨리 녹지 않을까요?", // 45.txt 번역
  "그늘에 만들면 녹지 않을 거예요.", // 46.txt 번역
  "누가 당신의 웃긴 춤 동작을 보고 웃지 않을까요?", // 47.txt 번역
  "선생님조차도 오늘 웃음을 멈추지 못했을 거예요.", // 48.txt 번역
  "이 반짝이는 돌로 무엇을 할 수 있나요?", // 49.txt 번역
  "나의 비밀 마법 돌로 만들 수 있어요.", // 50.txt 번역
  "왜 지금 밖에 나가서 놀 수 없나요?", // 51.txt 번역
  "비가 오고 엄마가 진흙탕이라고 하셨어요.", // 52.txt 번역
  "언제 새 강아지를 다시 볼 수 있나요?", // 53.txt 번역
  "내일 점심 먹고 놀러 와도 돼요.", // 54.txt 번역
  "우주 외계인으로부터 어디에 숨을 수 있나요?", // 55.txt 번역
  "뒷마당 큰 나무 뒤에 숨을 수 있어요.", // 56.txt 번역
  "누가 내 장난감 로봇 고치는 것을 도와줄 수 있나요?", // 57.txt 번역
  "아빠가 저녁 식사 후에 고쳐주실 수 있어요.", // 58.txt 번역
  "어떻게 그렇게 높이 뛸 수 있나요?", // 59.txt 번역
  "매일 트램펄린에서 연습했어요.", // 60.txt 번역
  "저녁 식사 전에 무엇을 먹으면 안 되나요?", // 61.txt 번역
  "저녁 식사 전에는 쿠키를 먹을 수 없어요.", // 62.txt 번역
  "왜 쿠키 단지를 열 수 없나요?", // 63.txt 번역
  "단단히 잠겨 있어서 열 수 없어요.", // 64.txt 번역
  "언제 부엌에 들어가면 안 되나요?", // 65.txt 번역
  "엄마가 요리하실 때는 거기에 가면 안 돼요.", // 66.txt 번역
  "그는 쿠키 부스러기를 어디에 숨길 수 없나요?", // 67.txt 번역
  "소파 밑에는 다시 숨길 수 없을 거예요.", // 68.txt 번역
  "누가 쿠키 비밀을 오래 지키지 못하나요?", // 69.txt 번역
  "그녀는 두 시간보다 오래 비밀을 지키지 못해요.", // 70.txt 번역
  "어떻게 쿠키 부스러기 소리를 듣지 못하나요?", // 71.txt 번역
  "만화가 크게 나와서 들을 수 없어요.", // 72.txt 번역
  "큰 침대 밑에서 무엇을 찾을 수 있나요?", // 73.txt 번역
  "거기서 내 곰 인형을 찾을 수 있을 거예요.", // 74.txt 번역
  "그는 왜 지금 우리에게서 숨고 있을까요?", // 75.txt 번역
  "진공청소기 소리 때문에 무서워할 거예요.", // 76.txt 번역
  "언제 그를 찾기 시작할 수 있나요?", // 77.txt 번역
  "오후 간식 먹고 바로 시작할 수 있어요.", // 78.txt 번역
  "어젯밤에 그것이 어디로 갔을까요?", // 79.txt 번역
  "장난감 상자 뒤로 굴러갔을 거예요.", // 80.txt 번역
  "누가 그것을 정원으로 가져갔을까요?", // 81.txt 번역
  "밖에서 놀면서 가져갔을 거예요.", // 82.txt 번역
  "어떻게 그를 안전하게 다시 데려올 수 있나요?", // 83.txt 번역
  "슈퍼히어로 배낭에 담아서 데려올 수 있어요.", // 84.txt 번역
  "비 오는 날에 무엇을 가지고 놀 수 없나요?", // 85.txt 번역
  "밖에서 종이 연을 가지고 놀 수 없어요.", // 86.txt 번역
  "왜 내 인형극에 올 수 없었나요?", // 87.txt 번역
  "장화를 잃어버려서 올 수 없었어요.", // 88.txt 번역
  "언제 뒷마당 경주를 시작할 수 없었나요?", // 89.txt 번역
  "천둥소리가 클 때는 시작할 수 없었어요.", // 90.txt 번역
  "어디에 레모네이드 가판대를 차릴 수 없었나요?", // 91.txt 번역
  "물이 뚝뚝 떨어지는 나무 아래에는 차릴 수 없었어요.", // 92.txt 번역
  "간식 소풍에 누가 같이 올 수 없었나요?", // 93.txt 번역
  "감기에 걸려서 같이 올 수 없었어요.", // 94.txt 번역
  "어떻게 양말이 젖지 않게 할 수 없었나요?", // 95.txt 번역
  "장화를 신지 않고는 마른 상태로 유지할 수 없었어요." // 96.txt 번역
];

// 🔊 오디오 설정
const AUDIO_CONFIG = {
  // 오디오 파일이 저장된 기본 디렉토리
  audioDirectory: 'sounds/96_audio/',
  
  // 오디오 파일 확장자
  audioExtension: '.mp3',
  
  // 오디오 파일 번호 시작값 (1부터 시작)
  audioStartIndex: 1,
  
  // 오디오 볼륨 설정 (0.0 ~ 1.0)
  audioVolume: 0.8
};

// 🛠️ 유틸리티 함수들
const CONTENT_UTILS = {
  // 인덱스로 오디오 파일 경로 생성
  getAudioPath: function(index) {
    return `${AUDIO_CONFIG.audioDirectory}${index + AUDIO_CONFIG.audioStartIndex}${AUDIO_CONFIG.audioExtension}`;
  },
  
  // 문장 총 개수 반환
  getTotalSentences: function() {
    return GAME_SENTENCES.length;
  },
  
  // 문장과 번역 배열 길이 일치 확인
  validateArrays: function() {
    if (GAME_SENTENCES.length !== GAME_TRANSLATIONS.length) {
      console.warn(`⚠️ 문장 배열과 번역 배열의 길이가 다릅니다! 문장: ${GAME_SENTENCES.length}, 번역: ${GAME_TRANSLATIONS.length}`);
      return false;
    }
    return true;
  },
  
  // 📝 새로운 영어 문장 추가 (자동 번역 포함)
  addSentence: function(englishSentence, koreanTranslation = null) {
    // 영어 문장 추가
    GAME_SENTENCES.push(englishSentence);
    
    // 한글 번역이 제공되지 않으면 자동 번역 (임시 플레이스홀더)
    if (!koreanTranslation) {
      koreanTranslation = this.autoTranslate(englishSentence);
    }
    
    // 한글 번역 추가
    GAME_TRANSLATIONS.push(koreanTranslation);
    
    console.log(`✅ 새 문장이 추가되었습니다:`);
    console.log(`🇺🇸 영어: ${englishSentence}`);
    console.log(`🇰🇷 한글: ${koreanTranslation}`);
    console.log(`🔊 오디오: ${this.getAudioPath(GAME_SENTENCES.length - 1)}`);
    
    return GAME_SENTENCES.length - 1; // 추가된 문장의 인덱스 반환
  },
  
  // 🔄 기존 문장 교체 (자동 번역 포함)
  replaceSentence: function(index, englishSentence, koreanTranslation = null) {
    if (index < 0 || index >= GAME_SENTENCES.length) {
      console.error(`❌ 잘못된 인덱스: ${index} (유효 범위: 0-${GAME_SENTENCES.length - 1})`);
      return false;
    }
    
    const oldEnglish = GAME_SENTENCES[index];
    const oldKorean = GAME_TRANSLATIONS[index];
    
    // 영어 문장 교체
    GAME_SENTENCES[index] = englishSentence;
    
    // 한글 번역이 제공되지 않으면 자동 번역
    if (!koreanTranslation) {
      koreanTranslation = this.autoTranslate(englishSentence);
    }
    
    // 한글 번역 교체
    GAME_TRANSLATIONS[index] = koreanTranslation;
    
    console.log(`🔄 문장이 교체되었습니다 (인덱스: ${index}):`);
    console.log(`이전 🇺🇸: ${oldEnglish}`);
    console.log(`새로운 🇺🇸: ${englishSentence}`);
    console.log(`이전 🇰🇷: ${oldKorean}`);
    console.log(`새로운 🇰🇷: ${koreanTranslation}`);
    console.log(`🔊 오디오: ${this.getAudioPath(index)}`);
    
    return true;
  },
    // 🤖 간단한 자동 번역 함수 (기본적인 패턴 기반)
  autoTranslate: function(englishSentence) {
    // 기본 문장 패턴들과 번역 매핑 (배열 형태)
    const translationPatterns = [
      // 의문문 패턴
      { pattern: /^What will (.+)\?$/, translation: "무엇을 할 건가요?" },
      { pattern: /^When will (.+)\?$/, translation: "언제 할 건가요?" },
      { pattern: /^Where will (.+)\?$/, translation: "어디서 할 건가요?" },
      { pattern: /^Who will (.+)\?$/, translation: "누가 할 건가요?" },
      { pattern: /^How will (.+)\?$/, translation: "어떻게 할 건가요?" },
      { pattern: /^Why will (.+)\?$/, translation: "왜 할 건가요?" },
      
      { pattern: /^What won't (.+)\?$/, translation: "무엇을 하지 않을 건가요?" },
      { pattern: /^When won't (.+)\?$/, translation: "언제 하지 않을 건가요?" },
      { pattern: /^Where won't (.+)\?$/, translation: "어디서 하지 않을 건가요?" },
      { pattern: /^Who won't (.+)\?$/, translation: "누가 하지 않을 건가요?" },
      { pattern: /^How won't (.+)\?$/, translation: "어떻게 하지 않을 건가요?" },
      { pattern: /^Why won't (.+)\?$/, translation: "왜 하지 않을 건가요?" },
      
      { pattern: /^What would (.+)\?$/, translation: "무엇을 할까요?" },
      { pattern: /^When would (.+)\?$/, translation: "언제 할까요?" },
      { pattern: /^Where would (.+)\?$/, translation: "어디서 할까요?" },
      { pattern: /^Who would (.+)\?$/, translation: "누가 할까요?" },
      { pattern: /^How would (.+)\?$/, translation: "어떻게 할까요?" },
      { pattern: /^Why would (.+)\?$/, translation: "왜 할까요?" },
      
      { pattern: /^What can (.+)\?$/, translation: "무엇을 할 수 있나요?" },
      { pattern: /^When can (.+)\?$/, translation: "언제 할 수 있나요?" },
      { pattern: /^Where can (.+)\?$/, translation: "어디서 할 수 있나요?" },
      { pattern: /^Who can (.+)\?$/, translation: "누가 할 수 있나요?" },
      { pattern: /^How can (.+)\?$/, translation: "어떻게 할 수 있나요?" },
      { pattern: /^Why can (.+)\?$/, translation: "왜 할 수 있나요?" },
      
      // 답변 패턴
      { pattern: /^I will (.+)\.$/, translation: "저는 할 거예요." },
      { pattern: /^We will (.+)\.$/, translation: "우리는 할 거예요." },
      { pattern: /^I won't (.+)\.$/, translation: "저는 하지 않을 거예요." },
      { pattern: /^We won't (.+)\.$/, translation: "우리는 하지 않을 거예요." },
      { pattern: /^I would (.+)\.$/, translation: "저는 할 거예요." },
      { pattern: /^We would (.+)\.$/, translation: "우리는 할 거예요." },
      { pattern: /^I can (.+)\.$/, translation: "저는 할 수 있어요." },
      { pattern: /^We can (.+)\.$/, translation: "우리는 할 수 있어요." }
    ];
    
    // 패턴 매칭 시도
    for (const item of translationPatterns) {
      if (item.pattern.test(englishSentence)) {
        return item.translation;
      }
    }
    
    // 패턴이 맞지 않으면 기본 번역 제공
    return `"${englishSentence}"의 번역이 필요합니다.`;
  }
};

// 초기 검증 실행
CONTENT_UTILS.validateArrays();

// 전역 스코프에 노출 (script.js에서 사용)
window.GAME_SENTENCES = GAME_SENTENCES;
window.GAME_TRANSLATIONS = GAME_TRANSLATIONS;
window.AUDIO_CONFIG = AUDIO_CONFIG;
window.CONTENT_UTILS = CONTENT_UTILS;

// 📖 사용법 예제 함수들 (개발자 도구 콘솔에서 사용 가능)
window.gameContentExamples = {
  // 새 문장 추가 예제
  addExample: function() {
    console.log('📝 새 문장 추가 예제:');
    console.log('CONTENT_UTILS.addSentence("What time do you wake up every morning?");');
    console.log('또는 번역과 함께:');
    console.log('CONTENT_UTILS.addSentence("What time do you wake up every morning?", "매일 아침 몇 시에 일어나나요?");');
  },
  
  // 문장 교체 예제
  replaceExample: function() {
    console.log('🔄 문장 교체 예제:');
    console.log('CONTENT_UTILS.replaceSentence(0, "Hello, how are you today?");');
    console.log('또는 번역과 함께:');
    console.log('CONTENT_UTILS.replaceSentence(0, "Hello, how are you today?", "안녕하세요, 오늘 어떠세요?");');
  },
  
  // 현재 상태 확인 예제
  statusExample: function() {
    console.log('📊 현재 상태 확인 예제:');
    console.log('console.log("총 문장 개수:", CONTENT_UTILS.getTotalSentences());');
    console.log('console.log("첫 번째 문장:", GAME_SENTENCES[0]);');
    console.log('console.log("첫 번째 번역:", GAME_TRANSLATIONS[0]);');
  },
  
  // 자동 번역 테스트
  testTranslation: function() {
    console.log('🤖 자동 번역 테스트:');
    const testSentences = [
      "What will you do tomorrow?",
      "I will go to school.",
      "Where can we play?",
      "We can play in the park."
    ];
    
    testSentences.forEach(sentence => {
      const translation = CONTENT_UTILS.autoTranslate(sentence);
      console.log(`🇺🇸 "${sentence}" → 🇰🇷 "${translation}"`);
    });
  },
  
  // 모든 예제 보기
  showAll: function() {
    this.addExample();
    console.log('');
    this.replaceExample();
    console.log('');
    this.statusExample();
    console.log('');
    this.testTranslation();
  }
};

// 📚 새로운 어휘 설명 (문장 1-12번의 새로운 단어들)
const NEW_VOCABULARY = {
  // 베리 관련 단어들
  "berries": {
    pronunciation: "[ˈbɛriz]",
    meaning: "딸기류, 작고 둥근 과일들",
    example: "Strawberries and blueberries are types of berries.",
    korean: "딸기와 블루베리는 베리의 종류입니다."
  },
  "yummy": {
    pronunciation: "[ˈjʌmi]",
    meaning: "맛있는, 냠냠한",
    example: "These yummy berries taste so sweet!",
    korean: "이 맛있는 베리들은 정말 달콤해요!"
  },
  "juicy": {
    pronunciation: "[ˈdʒusi]",
    meaning: "즙이 많은, 과즙이 풍부한",
    example: "The juicy berries burst with flavor.",
    korean: "즙이 많은 베리들이 맛으로 터집니다."
  },
  
  // 덩굴과 그네 관련 단어들
  "vine": {
    pronunciation: "[vaɪn]",
    meaning: "덩굴, 포도나무",
    example: "The long vine hangs from the tall tree.",
    korean: "긴 덩굴이 키 큰 나무에서 매달려 있습니다."
  },
  "swing": {
    pronunciation: "[swɪŋ]",
    meaning: "그네타기, 흔들리다",
    example: "We love to swing on the playground.",
    korean: "우리는 놀이터에서 그네타는 것을 좋아합니다."
  },
  "wobbly": {
    pronunciation: "[ˈwɑbli]",
    meaning: "흔들거리는, 불안정한",
    example: "The wobbly bridge moved back and forth.",
    korean: "흔들거리는 다리가 앞뒤로 움직였습니다."
  },
  "speedy": {
    pronunciation: "[ˈspidi]",
    meaning: "빠른, 신속한",
    example: "The speedy ride made us scream with joy!",
    korean: "빠른 놀이기구가 우리를 기쁨으로 소리지르게 했어요!"
  },
  
  // 펭귄과 용기 관련 단어들
  "penguin": {
    pronunciation: "[ˈpɛŋɡwɪn]",
    meaning: "펭귄 (남극에 사는 새)",
    example: "The little penguin waddled on the ice.",
    korean: "작은 펭귄이 얼음 위에서 뒤뚱거렸습니다."
  },
  "bravest": {
    pronunciation: "[ˈbreɪvɪst]",
    meaning: "가장 용감한 (brave의 최상급)",
    example: "She is the bravest person I know.",
    korean: "그녀는 내가 아는 가장 용감한 사람입니다."
  },
  
  // 움직임과 액션 관련 단어들
  "bounce": {
    pronunciation: "[baʊns]",
    meaning: "튕기다, 반동하다",
    example: "The ball will bounce high when dropped.",
    korean: "공을 떨어뜨리면 높이 튕길 것입니다."
  },
  "rubber balls": {
    pronunciation: "[ˈrʌbər bɔlz]",
    meaning: "고무공들",
    example: "Children love playing with colorful rubber balls.",
    korean: "아이들은 알록달록한 고무공으로 노는 것을 좋아합니다."
  },
  
  // 건설과 도구 관련 단어들
  "build": {
    pronunciation: "[bɪld]",
    meaning: "만들다, 건설하다",
    example: "We will build a sandcastle at the beach.",
    korean: "우리는 해변에서 모래성을 만들 것입니다."
  },
  "raft": {
    pronunciation: "[ræft]",
    meaning: "뗏목, 부유물",
    example: "The wooden raft floated down the river.",
    korean: "나무 뗏목이 강을 따라 떠내려갔습니다."
  },
  
  // 성공과 결과 관련 단어들
  "successful": {
    pronunciation: "[səkˈsɛsfəl]",
    meaning: "성공한, 성공적인",
    example: "Our plan was very successful!",
    korean: "우리의 계획은 매우 성공적이었어요!"
  },
  "breaks": {
    pronunciation: "[breɪks]",
    meaning: "부러지다, 깨지다",
    example: "Be careful so the stick doesn't break.",
    korean: "막대기가 부러지지 않도록 조심하세요."
  }
};

console.log('✅ 게임 콘텐츠 설정이 로드되었습니다!');
console.log(`📝 문장 개수: ${GAME_SENTENCES.length}`);
console.log(`🇰🇷 번역 개수: ${GAME_TRANSLATIONS.length}`);
console.log(`🔊 오디오 디렉토리: ${AUDIO_CONFIG.audioDirectory}`);
console.log(`📚 새로운 어휘: ${Object.keys(NEW_VOCABULARY).length}개`);
console.log('');
console.log('💡 사용법을 보려면 개발자 도구에서 다음을 입력하세요:');
console.log('gameContentExamples.showAll()');