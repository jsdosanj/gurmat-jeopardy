import type { Question } from '../types'
import { CATEGORIES } from '../data/gameData'

type Props = {
  questions: Question[]
  onPick: (q: Question) => void
}

const POINTS = [100, 200, 300, 400, 500]

export default function GameBoard({ questions, onPick }: Props) {
  return (
    <div className="flex-1 grid gap-2 p-3" style={{ gridTemplateColumns: `repeat(${CATEGORIES.length}, 1fr)` }}>
      {CATEGORIES.map(cat => (
        <div key={cat} className="flex flex-col gap-2">
          {/* Category header */}
          <div className="bg-amber-400 text-blue-950 font-bold text-center rounded-xl flex items-center justify-center px-2 py-3 leading-tight"
            style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1.25rem)', minHeight: '4rem' }}>
            {cat}
          </div>

          {/* Point tiles */}
          {POINTS.map(pts => {
            const q = questions.find(q => q.category === cat && q.points === pts)
            if (!q) return null
            return (
              <button
                key={pts}
                onClick={() => !q.used && onPick(q)}
                disabled={q.used}
                className={`flex-1 rounded-xl font-bold transition-all flex items-center justify-center ${
                  q.used
                    ? 'bg-blue-950 text-blue-950 cursor-default'
                    : 'bg-blue-700 hover:bg-blue-500 active:scale-95 text-amber-300 cursor-pointer shadow-lg hover:shadow-amber-400/20'
                }`}
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3rem)', minHeight: '5rem' }}
              >
                {q.used ? '' : `$${pts}`}
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
}
