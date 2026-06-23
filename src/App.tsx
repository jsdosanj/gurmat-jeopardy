import { useState, useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import type { Question, Team, GamePhase } from './types'
import { initialQuestions } from './data/gameData'
import { makeTeams, nextIndex } from './utils/gameLogic'
import IntroScreen from './components/IntroScreen'
import TeamSetup from './components/TeamSetup'
import GameBoard from './components/GameBoard'
import QuestionModal from './components/QuestionModal'
import ControlPanel from './components/ControlPanel'
import FinalScoreboard from './components/FinalScoreboard'

const TIMER_SECONDS = 30

export default function App() {
  const [phase, setPhase] = useState<GamePhase>('intro')
  const [teams, setTeams] = useState<Team[]>([])
  const [questions, setQuestions] = useState<Question[]>(initialQuestions)
  const [current, setCurrent] = useState<Question | null>(null)

  // Which team picks next question
  const [pickerIdx, setPickerIdx] = useState(0)
  // Which team is currently answering
  const [answeringIdx, setAnsweringIdx] = useState(0)
  // Indices of teams that still haven't tried this question
  const [remaining, setRemaining] = useState<number[]>([])

  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS)
  const [timerRunning, setTimerRunning] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Timer tick
  useEffect(() => {
    if (timerRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(t => Math.max(0, t - 1))
      }, 1000)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [timerRunning])

  function openQuestion(q: Question) {
    setCurrent(q)
    setAnsweringIdx(pickerIdx)
    setRemaining(teams.map((_, i) => i).filter(i => i !== pickerIdx))
    setTimeLeft(TIMER_SECONDS)
    setTimerRunning(true)
    setShowAnswer(false)
    setPhase('question')
  }

  function markUsed() {
    if (!current) return
    setQuestions(qs => qs.map(q => q.id === current.id ? { ...q, used: true } : q))
  }

  function advancePicker() {
    setPickerIdx(i => nextIndex(i, teams.length))
  }

  function closeModal() {
    setTimerRunning(false)
    setCurrent(null)
    setShowAnswer(false)
    setPhase('board')
  }

  function handleCorrect() {
    if (!current) return
    setTeams(ts =>
      ts.map((t, i) => i === answeringIdx ? { ...t, score: t.score + current.points } : t)
    )
    markUsed()
    advancePicker()
    closeModal()
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#ffffff', '#1e3a8a'],
    })
  }

  function handleWrong() {
    if (remaining.length === 0) {
      markUsed()
      advancePicker()
      closeModal()
      return
    }
    const [nextIdx, ...rest] = remaining
    setAnsweringIdx(nextIdx)
    setRemaining(rest)
    setTimeLeft(TIMER_SECONDS)
  }

  function handleSkip() {
    markUsed()
    advancePicker()
    closeModal()
  }

  function handleRestart() {
    setQuestions(initialQuestions)
    setTeams([])
    setPickerIdx(0)
    setAnsweringIdx(0)
    setRemaining([])
    setCurrent(null)
    setPhase('intro')
  }

  if (phase === 'intro') return <IntroScreen onStart={() => setPhase('teamSetup')} />

  if (phase === 'teamSetup')
    return (
      <TeamSetup
        onSubmit={names => {
          setTeams(makeTeams(names))
          setPickerIdx(0)
          setPhase('board')
        }}
      />
    )

  if (phase === 'final') return <FinalScoreboard teams={teams} onRestart={handleRestart} />

  return (
    <div className="w-screen h-screen bg-blue-900 flex flex-col overflow-hidden">
      <ControlPanel
        teams={teams}
        pickerTeam={teams[pickerIdx]}
        onAdjustScore={(id, delta) =>
          setTeams(ts => ts.map(t => t.id === id ? { ...t, score: t.score + delta } : t))
        }
        onFinish={() => setPhase('final')}
      />

      <GameBoard questions={questions} onPick={openQuestion} />

      {current && phase === 'question' && (
        <QuestionModal
          question={current}
          answeringTeam={teams[answeringIdx]}
          timeLeft={timeLeft}
          timerRunning={timerRunning}
          showAnswer={showAnswer}
          onCorrect={handleCorrect}
          onWrong={handleWrong}
          onSkip={handleSkip}
          onToggleAnswer={() => setShowAnswer(a => !a)}
          onToggleTimer={() => setTimerRunning(r => !r)}
        />
      )}
    </div>
  )
}
