import { useEffect } from 'react'
import confetti from 'canvas-confetti'
import type { Team } from '../types'
import { getWinners } from '../utils/gameLogic'

type Props = {
  teams: Team[]
  onRestart: () => void
  onTiebreaker: (tiedIndices: number[]) => void
}

const MEDALS = ['🥇', '🥈', '🥉']

export default function FinalScoreboard({ teams, onRestart, onTiebreaker }: Props) {
  const sorted = [...teams].sort((a, b) => b.score - a.score)
  const winners = getWinners(teams)

  useEffect(() => {
    const end = Date.now() + 4000
    const colors = ['#f59e0b', '#ffffff', '#1e3a8a']
    ;(function frame() {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors })
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors })
      if (Date.now() < end) requestAnimationFrame(frame)
    })()
  }, [])

  function handleTiebreaker() {
    const tiedIndices = winners.map(w => teams.findIndex(t => t.id === w.id))
    onTiebreaker(tiedIndices)
  }

  return (
    <div className="w-screen h-screen bg-blue-950 flex flex-col items-center justify-center gap-10 p-8">
      <div className="text-center">
        <p className="text-amber-400 text-2xl font-bold uppercase tracking-widest mb-2">
          ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ · ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫਤਿਹ
        </p>
        <h2 className="text-white font-black" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
          {winners.length === 1 ? `${winners[0].name} Wins!` : "It's a Tie!"}
        </h2>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-2xl">
        {sorted.map((team, i) => {
          const isWinner = winners.some(w => w.id === team.id)
          return (
            <div
              key={team.id}
              className={`flex items-center gap-6 px-8 py-5 rounded-2xl ${
                isWinner ? 'bg-amber-400 text-blue-950' : 'bg-blue-800 text-white'
              }`}
            >
              <span className="text-4xl">{MEDALS[i] ?? ''}</span>
              <span className="flex-1 font-bold text-3xl">{team.name}</span>
              <span className="font-black text-4xl">${team.score}</span>
            </div>
          )
        })}
      </div>

      <div className="flex flex-col items-center gap-4">
        {winners.length > 1 && (
          <div className="flex flex-col items-center gap-3">
            <p className="text-blue-300 text-xl">Break the tie with a Double or Nothing question?</p>
            <button
              onClick={handleTiebreaker}
              className="bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-blue-950 font-black text-2xl px-12 py-4 rounded-2xl transition-colors shadow-xl"
            >
              🎲 Tiebreaker Round
            </button>
          </div>
        )}

        <button
          onClick={onRestart}
          className="bg-blue-800 hover:bg-blue-700 text-white font-bold text-2xl px-12 py-5 rounded-2xl transition-colors mt-2"
        >
          Play Again
        </button>
      </div>
    </div>
  )
}
