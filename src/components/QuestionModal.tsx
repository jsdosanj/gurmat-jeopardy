import type { Question, Team } from '../types'

type Props = {
  question: Question
  answeringTeam: Team
  timeLeft: number
  timerRunning: boolean
  showAnswer: boolean
  isDoubleOrNothing: boolean
  isTiebreaker: boolean
  onCorrect: () => void
  onWrong: () => void
  onSkip: () => void
  onToggleAnswer: () => void
  onToggleTimer: () => void
}

export default function QuestionModal({
  question,
  answeringTeam,
  timeLeft,
  timerRunning,
  showAnswer,
  isDoubleOrNothing,
  isTiebreaker,
  onCorrect,
  onWrong,
  onSkip,
  onToggleAnswer,
  onToggleTimer,
}: Props) {
  const pct = (timeLeft / 30) * 100
  const timerColor =
    timeLeft > 15 ? 'bg-green-500' : timeLeft > 7 ? 'bg-amber-400' : 'bg-red-500'

  const isSpecial = isDoubleOrNothing || isTiebreaker

  return (
    <div className="fixed inset-0 bg-blue-950/95 backdrop-blur-sm flex flex-col items-center justify-between p-8 z-50">
      {/* Double or Nothing / Tiebreaker banner */}
      {isSpecial && (
        <div className="w-full max-w-4xl bg-amber-400 text-blue-950 rounded-2xl px-8 py-4 text-center shadow-2xl">
          <p className="font-black tracking-widest uppercase" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            🎲 {isTiebreaker ? 'Tiebreaker — ' : ''}Double or Nothing!
          </p>
          <p className="font-semibold text-base opacity-75 mt-1">
            {isTiebreaker
              ? 'Correct = score doubles · Wrong = score goes to zero'
              : 'Correct = score doubles · Wrong = lose everything'}
          </p>
        </div>
      )}

      {/* Header */}
      {!isSpecial && (
        <div className="w-full flex items-center justify-between">
          <div className="text-amber-400 font-bold text-2xl">
            {question.category} · ${question.points}
          </div>
          <div className={`px-6 py-2 rounded-xl text-xl font-black ${
            answeringTeam ? 'bg-amber-400 text-blue-950' : 'bg-blue-800 text-white'
          }`}>
            {answeringTeam?.name ?? '—'}
          </div>
        </div>
      )}

      {isSpecial && (
        <div className="w-full flex justify-end">
          <div className="bg-blue-800 px-6 py-2 rounded-xl text-xl font-black text-white">
            {answeringTeam?.name ?? '—'}
          </div>
        </div>
      )}

      {/* Timer bar */}
      <div className="w-full max-w-3xl">
        <div className="w-full h-4 bg-blue-800 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-1000 ${timerColor}`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="text-center text-white text-2xl font-bold mt-2">{timeLeft}s</div>
      </div>

      {/* Clue */}
      <div className="flex-1 flex items-center justify-center px-4 max-w-5xl text-center">
        <p className="text-white font-semibold leading-snug"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3.5rem)' }}>
          {question.clue}
        </p>
      </div>

      {/* Answer reveal */}
      {showAnswer && (
        <div className="w-full max-w-4xl bg-blue-800 border-2 border-amber-400 rounded-2xl p-6 text-center">
          <p className="text-amber-300 text-sm uppercase tracking-widest font-bold mb-2">Answer</p>
          <p className="text-white font-bold" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)' }}>
            {question.answer}
          </p>
        </div>
      )}

      {/* Action buttons */}
      <div className="w-full flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={onCorrect}
          className="bg-green-600 hover:bg-green-500 active:scale-95 text-white font-black text-2xl px-10 py-4 rounded-2xl transition-all shadow-lg"
        >
          {isSpecial ? '✓ Correct — Double!' : '✓ Correct'}
        </button>
        <button
          onClick={onWrong}
          className="bg-red-600 hover:bg-red-500 active:scale-95 text-white font-black text-2xl px-10 py-4 rounded-2xl transition-all shadow-lg"
        >
          {isDoubleOrNothing ? '✗ Wrong — Lose All' : isTiebreaker ? '✗ Wrong — Lose All / Pass' : '✗ Wrong / Pass'}
        </button>
        <button
          onClick={onToggleAnswer}
          className="bg-blue-700 hover:bg-blue-600 active:scale-95 text-white font-bold text-xl px-8 py-4 rounded-2xl transition-all"
        >
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </button>
        <button
          onClick={onToggleTimer}
          className="bg-blue-700 hover:bg-blue-600 active:scale-95 text-white font-bold text-xl px-8 py-4 rounded-2xl transition-all"
        >
          {timerRunning ? '⏸ Pause' : '▶ Resume'}
        </button>
        {!isDoubleOrNothing && (
          <button
            onClick={onSkip}
            className="bg-blue-800 hover:bg-blue-700 active:scale-95 text-blue-300 font-bold text-xl px-8 py-4 rounded-2xl transition-all"
          >
            Skip
          </button>
        )}
      </div>
    </div>
  )
}
