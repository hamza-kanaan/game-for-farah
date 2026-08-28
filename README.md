# Farah's Quiz Quest 🎯

A bright, playful multiple-choice quiz game for kids, built with plain HTML, CSS
and JavaScript. No build step, no frameworks, no dependencies — just open it and
play.

**▶️ Play it now: [hamza-kanaan.github.io/game-for-farah](https://hamza-kanaan.github.io/game-for-farah/)**

Works on any phone, tablet or laptop with a browser. Nothing to install.

## How to play

1. **Pick a round** from the five categories on the home screen.
2. **Answer 14 questions**, one at a time. Tap an answer, or use the keyboard.
3. **Read the fun fact** that appears after every answer — right or wrong, you
   always learn something.
4. **Watch your stars grow**, then see your badge on the results screen.
5. **Play again** with the questions reshuffled, or pick a different round.

### Keyboard shortcuts

| Key     | Does                      |
| ------- | ------------------------- |
| `1`–`4` | Pick that answer          |
| `A`–`D` | Pick that answer          |
| `Enter` | Move to the next question |

## The rounds

| Round            | Emoji | What's in it                          |
| ---------------- | ----- | ------------------------------------- |
| Animal Kingdom   | 🐾    | Creatures big, small and very strange |
| Science Lab      | 🔬    | Space, bodies and how things work     |
| Around the World | 🌍    | Countries, oceans and giant mountains |
| Number Ninja     | 🔢    | Sums, shapes and sneaky patterns      |
| Mega Mix         | 🧠    | A bit of everything                   |

Each round has **14 questions**: 12 regular ones worth 1 star each, plus **2
harder bonus questions at the end worth 2 stars each** — 16 stars possible per
round.

## Scoring and badges

The 12 regular questions are **reshuffled every time you play**, so a replay
never feels the same. The bonus questions always come last.

Get **3 or more correct in a row** and a 🔥 streak flag appears. Your best streak
of the round is shown at the end, alongside your badge:

| Stars (out of 16) | Badge             |
| ----------------- | ----------------- |
| 16                | 👑 Perfect Score! |
| 13–15             | 🏆 Quiz Champion! |
| 10–12             | 🌟 Star Player!   |
| 7–9               | 🚀 Rising Star!   |
| 0–6               | 🌱 Great Effort!  |

## Design notes

- **Encouraging by design.** A wrong answer is never called "wrong" — it gets a
  gentle nudge like "Now you know", the correct answer is revealed, and the fun
  fact is shown either way.
- **Instant feedback.** Right answers go green, a wrong pick goes pink while the
  correct one is still highlighted, and the score pill pops.
- **Celebration.** Confetti falls for a correct bonus question and again on a
  strong final score.
- **Accessible.** Answers are real buttons that work with a keyboard and a screen
  reader, feedback is announced via `aria-live`, and all animation is switched
  off automatically for anyone who has "reduce motion" turned on in their system
  settings.

## Running it on your own computer

You do not need a server — the game is entirely static.

**Easiest:** clone the repo and double-click `index.html`.

```bash
git clone https://github.com/hamza-kanaan/game-for-farah.git
cd game-for-farah
```

**Over HTTP** (a little closer to how it runs when hosted):

```bash
npx serve .
```

Then open the address it prints, usually <http://localhost:3000>.

## Project structure

```
index.html         # the whole page: three screens (home, quiz, results)
css/style.css      # all styling and animations
js/questions.js    # the quiz content — every category and question
js/game.js         # game logic: rounds, scoring, feedback, results
```

The three files are deliberately separate so the **content can be edited without
touching the code**.

## Adding your own questions

Open `js/questions.js`. Each category is an object, and each question inside it
looks like this:

```js
{
  q: 'How many hearts does an octopus have?',
  options: ['1', '2', '3', '8'],
  answer: 2,          // index into options — 0 is the first one
  explain: 'Three! Two pump blood to the gills and one to the rest of the body.',
  bonus: true         // optional — bonus questions are worth 2 stars and come last
}
```

A few rules the game relies on:

- `options` can hold **3 or 4** choices.
- `answer` is a **zero-based index**, so `2` means the third option.
- `explain` is shown after answering, whether the answer was right or wrong.
- Leave `bonus` off for a normal question.

To add a whole new round, copy an existing category block and change its `id`,
`name`, `emoji`, `blurb` and `color`. The home screen builds its cards from this
file, so a new category appears on its own with no other changes.

## Hosting

The live site is served by GitHub Pages from the `main` branch. Pushing to `main`
redeploys it automatically in about a minute.

## License

MIT — see [LICENSE](LICENSE).
