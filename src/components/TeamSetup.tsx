import { useState } from 'react'

type Props = { onSubmit: (names: string[]) => void }

const DEFAULT_COUNT = 3

export default function TeamSetup({ onSubmit }: Props) {
  const [count, setCount] = useState(DEFAULT_COUNT)
  const [names, setNames] = useState<string[]>(
    Array.from({ length: 6 }, (_, i) => `Team ${i + 1}`)
  )

  function handleSubmit() {
    const active = names.slice(0, count).map(n => n.trim()).filter(Boolean)
    if (active.length < 2) return
    onSubmit(active)
  }

  return (
    <div className="w-screen h-screen bg-blue-950 flex flex-col items-center justify-center gap-8 p-8">
      <h2 className="text-white text-5xl font-bold">Set Up Teams</h2>

      <div className="flex items-center gap-6">
        <span className="text-blue-300 text-2xl">Number of teams:</span>
        <div className="flex gap-2">
          {[2, 3, 4, 5, 6].map(n => (
            <button
              key={n}
              onClick={() => setCount(n)}
              className={`w-14 h-14 rounded-xl text-2xl font-bold transition-colors ${
                count === n
                  ? 'bg-amber-400 text-blue-950'
                  : 'bg-blue-800 text-white hover:bg-blue-700'
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-amber-400 text-xl font-bold w-8">{i + 1}.</span>
            <input
              type="text"
              value={names[i]}
              onChange={e => setNames(ns => ns.map((n, j) => j === i ? e.target.value : n))}
              className="flex-1 bg-blue-800 text-white text-xl px-4 py-3 rounded-xl border-2 border-blue-700 focus:border-amber-400 focus:outline-none"
              placeholder={`Team ${i + 1}`}
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold text-2xl px-14 py-5 rounded-2xl transition-colors mt-4"
      >
        Start Game →
      </button>
    </div>
  )
}
