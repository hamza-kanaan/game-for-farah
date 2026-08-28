/*
 * Game logic for Farah's Quiz Quest.
 *
 * Reads QUIZ_DATA from js/questions.js and drives the three screens in
 * index.html. The class names it toggles (is-active, is-correct, is-wrong,
 * is-dim, is-bonus, show, pop) are the contract with css/style.css.
 */

/* ==========================================================================
   Setup
   ========================================================================== */
const REGULAR_POINTS = 1;
const BONUS_POINTS = 2;
const STREAK_AT = 3; // cheer from this many correct in a row
const OPTION_KEYS = ['A', 'B', 'C', 'D'];

const calmMode = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const el = {
  screens: {
    home: document.getElementById('screen-home'),
    quiz: document.getElementById('screen-quiz'),
    result: document.getElementById('screen-result')
  },
  categoryGrid: document.getElementById('category-grid'),
  btnHome: document.getElementById('btn-home'),
  quizCategory: document.getElementById('quiz-category'),
  quizCounter: document.getElementById('quiz-counter'),
  scorePill: document.querySelector('.score-pill'),
  scoreValue: document.getElementById('score-value'),
  progressFill: document.getElementById('progress-fill'),
  streakFlag: document.getElementById('streak-flag'),
  questionCard: document.getElementById('question-card'),
  questionText: document.getElementById('question-text'),
  options: document.getElementById('options'),
  feedback: document.getElementById('feedback'),
  feedbackEmoji: document.getElementById('feedback-emoji'),
  feedbackHeadline: document.getElementById('feedback-headline'),
  feedbackExplain: document.getElementById('feedback-explain'),
  btnNext: document.getElementById('btn-next'),
  badgeEmoji: document.getElementById('badge-emoji'),
  badgeTitle: document.getElementById('badge-title'),
  resultMessage: document.getElementById('result-message'),
  statCorrect: document.getElementById('stat-correct'),
  statStars: document.getElementById('stat-stars'),
  statStreak: document.getElementById('stat-streak'),
  btnAgain: document.getElementById('btn-again'),
  btnNewCategory: document.getElementById('btn-new-category'),
  confettiLayer: document.getElementById('confetti-layer')
};

/* The whole round lives in here, rebuilt by startRound(). */
let round = null;

/* ==========================================================================
   Home screen
   ========================================================================== */
function buildCategoryCards() {
  el.categoryGrid.innerHTML = '';

  QUIZ_DATA.forEach(category => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'category-card';
    card.style.setProperty('--accent', category.color);

    const emoji = document.createElement('span');
    emoji.className = 'cat-emoji';
    emoji.setAttribute('aria-hidden', 'true');
    emoji.textContent = category.emoji;

    const name = document.createElement('span');
    name.className = 'cat-name';
    name.textContent = category.name;

    const blurb = document.createElement('span');
    blurb.className = 'cat-blurb';
    blurb.textContent = category.blurb;

    const count = document.createElement('span');
    count.className = 'cat-count';
    count.textContent = `${category.questions.length} questions`;

    card.append(emoji, name, blurb, count);
    card.addEventListener('click', () => startRound(category));
    el.categoryGrid.appendChild(card);
  });
}

/* ==========================================================================
   Screens
   ========================================================================== */
function showScreen(name) {
  Object.entries(el.screens).forEach(([key, screen]) => {
    screen.classList.toggle('is-active', key === name);
  });
  window.scrollTo({ top: 0, behavior: calmMode ? 'auto' : 'smooth' });
}

function goHome() {
  round = null;
  showScreen('home');
}

/* ==========================================================================
   Running a round
   ========================================================================== */

/* Fisher-Yates, on a copy so QUIZ_DATA is never reordered. */
function shuffled(list) {
  const copy = list.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/* Regular questions get shuffled; bonus ones always come last. */
function buildQuestionOrder(category) {
  const regular = category.questions.filter(q => !q.bonus);
  const bonus = category.questions.filter(q => q.bonus);
  return shuffled(regular).concat(shuffled(bonus));
}

function startRound(category) {
  round = {
    category,
    questions: buildQuestionOrder(category),
    index: 0,
    stars: 0,
    correct: 0,
    streak: 0,
    bestStreak: 0,
    answered: false
  };

  el.quizCategory.textContent = `${category.emoji} ${category.name}`;
  el.scoreValue.textContent = '0';
  el.streakFlag.textContent = '';
  el.streakFlag.classList.remove('show');

  showScreen('quiz');
  renderQuestion();
}

function currentQuestion() {
  return round.questions[round.index];
}

function totalStars(category) {
  return category.questions.reduce(
    (sum, q) => sum + (q.bonus ? BONUS_POINTS : REGULAR_POINTS),
    0
  );
}

function renderQuestion() {
  const question = currentQuestion();
  round.answered = false;

  el.quizCounter.textContent = `Question ${round.index + 1} of ${round.questions.length}`;
  el.progressFill.style.width = `${(round.index / round.questions.length) * 100}%`;

  el.questionCard.classList.toggle('is-bonus', Boolean(question.bonus));
  el.questionText.textContent = question.q;

  el.feedback.classList.remove('show', 'is-correct', 'is-wrong');

  el.options.innerHTML = '';
  question.options.forEach((text, i) => {
    el.options.appendChild(buildOption(text, i));
  });
}

function buildOption(text, index) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'option';
  button.style.setProperty('--accent', round.category.color);

  const key = document.createElement('span');
  key.className = 'key';
  key.setAttribute('aria-hidden', 'true');
  key.textContent = OPTION_KEYS[index];

  const label = document.createElement('span');
  label.className = 'label';
  label.textContent = text;

  const mark = document.createElement('span');
  mark.className = 'mark';
  mark.setAttribute('aria-hidden', 'true');

  button.append(key, label, mark);
  button.addEventListener('click', () => answer(index));
  return button;
}

/* ==========================================================================
   Answering
   ========================================================================== */
function answer(chosen) {
  if (round.answered) return;
  round.answered = true;

  const question = currentQuestion();
  const isCorrect = chosen === question.answer;

  Array.from(el.options.children).forEach((button, i) => {
    button.disabled = true;
    const mark = button.querySelector('.mark');

    if (i === question.answer) {
      button.classList.add('is-correct');
      mark.textContent = '✅';
    } else if (i === chosen) {
      button.classList.add('is-wrong');
      mark.textContent = '❌';
    } else {
      button.classList.add('is-dim');
    }
  });

  if (isCorrect) {
    round.stars += question.bonus ? BONUS_POINTS : REGULAR_POINTS;
    round.correct += 1;
    round.streak += 1;
    round.bestStreak = Math.max(round.bestStreak, round.streak);
    bumpScore();
    if (question.bonus) dropConfetti(26);
  } else {
    round.streak = 0;
  }

  updateStreakFlag();
  showFeedback(isCorrect, question);

  el.progressFill.style.width = `${((round.index + 1) / round.questions.length) * 100}%`;
  el.btnNext.textContent =
    round.index === round.questions.length - 1 ? 'See my results →' : 'Next question →';
  el.btnNext.focus({ preventScroll: true });
}

function bumpScore() {
  el.scoreValue.textContent = String(round.stars);
  el.scorePill.classList.remove('pop');
  void el.scorePill.offsetWidth; // restart the animation
  el.scorePill.classList.add('pop');
}

function updateStreakFlag() {
  if (round.streak >= STREAK_AT) {
    el.streakFlag.textContent = `🔥 ${round.streak} in a row!`;
    el.streakFlag.classList.remove('show');
    void el.streakFlag.offsetWidth;
    el.streakFlag.classList.add('show');
  } else {
    el.streakFlag.textContent = '';
    el.streakFlag.classList.remove('show');
  }
}

const CHEERS = [
  { emoji: '🎉', headline: 'Yes!' },
  { emoji: '🌟', headline: 'Spot on!' },
  { emoji: '🚀', headline: 'Brilliant!' },
  { emoji: '💪', headline: 'Nailed it!' },
  { emoji: '🥳', headline: 'Correct!' }
];

const CONSOLATIONS = [
  { emoji: '🤔', headline: 'Not this time' },
  { emoji: '💡', headline: 'Good try!' },
  { emoji: '🌱', headline: 'Now you know' }
];

function pickOne(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function showFeedback(isCorrect, question) {
  const mood = pickOne(isCorrect ? CHEERS : CONSOLATIONS);

  el.feedbackEmoji.textContent = mood.emoji;
  el.feedbackHeadline.textContent = mood.headline;

  el.feedbackExplain.textContent = isCorrect
    ? question.explain
    : `The answer was: ${question.options[question.answer]}. ${question.explain}`;

  el.feedback.classList.toggle('is-correct', isCorrect);
  el.feedback.classList.toggle('is-wrong', !isCorrect);
  el.feedback.classList.add('show');
}

function nextQuestion() {
  if (!round || !round.answered) return;

  if (round.index >= round.questions.length - 1) {
    showResults();
    return;
  }

  round.index += 1;
  renderQuestion();
}

/* ==========================================================================
   Results
   ========================================================================== */
const BADGES = [
  { min: 1.0, emoji: '👑', title: 'Perfect Score!', message: 'Every single question, bonus ones included. That is as good as it gets — take a bow, Farah!' },
  { min: 0.8, emoji: '🏆', title: 'Quiz Champion!', message: 'A brilliant round. You knew nearly all of it and picked up the tricky ones too.' },
  { min: 0.6, emoji: '🌟', title: 'Star Player!',   message: 'A really strong score. A couple more rounds and that trophy is yours.' },
  { min: 0.4, emoji: '🚀', title: 'Rising Star!',   message: 'Good going! You are getting the hang of this, and those fun facts will help next time.' },
  { min: 0.0, emoji: '🌱', title: 'Great Effort!',  message: 'Every quiz teaches you something new. Give it another go and watch your score climb.' }
];

function showResults() {
  const max = totalStars(round.category);
  const ratio = max === 0 ? 0 : round.stars / max;
  const badge = BADGES.find(b => ratio >= b.min);

  el.badgeEmoji.textContent = badge.emoji;
  el.badgeTitle.textContent = badge.title;
  el.resultMessage.textContent =
    `${badge.message} You scored ${round.stars} out of ${max} stars in ${round.category.name}.`;

  el.statCorrect.textContent = `${round.correct}/${round.questions.length}`;
  el.statStars.textContent = String(round.stars);
  el.statStreak.textContent = String(round.bestStreak);

  showScreen('result');

  if (ratio >= 0.6) dropConfetti(ratio >= 0.8 ? 90 : 50);
}

/* ==========================================================================
   Confetti
   ========================================================================== */
const CONFETTI_COLOURS = ['#ffd93d', '#ff5fa2', '#3ecf8e', '#4ec3f7', '#ff8a3d', '#a78bfa'];

function dropConfetti(count) {
  if (calmMode) return;

  for (let i = 0; i < count; i++) {
    const bit = document.createElement('span');
    bit.className = 'confetti-bit';
    bit.style.left = `${Math.random() * 100}%`;
    bit.style.background = CONFETTI_COLOURS[i % CONFETTI_COLOURS.length];
    bit.style.animationDuration = `${2.2 + Math.random() * 1.8}s`;
    bit.style.animationDelay = `${Math.random() * 0.6}s`;

    bit.addEventListener('animationend', () => bit.remove());
    el.confettiLayer.appendChild(bit);
  }
}

/* ==========================================================================
   Wiring
   ========================================================================== */
el.btnHome.addEventListener('click', goHome);
el.btnNext.addEventListener('click', nextQuestion);
el.btnAgain.addEventListener('click', () => startRound(round.category));
el.btnNewCategory.addEventListener('click', goHome);

/* Keyboard shortcuts: 1-4 or A-D to answer, Enter to move on. */
document.addEventListener('keydown', event => {
  if (!round || !el.screens.quiz.classList.contains('is-active')) return;
  if (event.metaKey || event.ctrlKey || event.altKey) return;

  if (round.answered) {
    // Leave Enter alone when the Next button already has focus.
    if (event.key === 'Enter' && document.activeElement !== el.btnNext) {
      event.preventDefault();
      nextQuestion();
    }
    return;
  }

  const key = event.key.toUpperCase();
  const index = /^[1-4]$/.test(key) ? Number(key) - 1 : OPTION_KEYS.indexOf(key);
  const button = index >= 0 ? el.options.children[index] : null;

  if (button) {
    event.preventDefault();
    button.click();
  }
});

buildCategoryCards();
