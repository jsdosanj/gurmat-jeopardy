import type { Team } from '../types'

type Props = {
  teams: Team[]
  pickerTeam: Team
  onAdjustScore: (id: number, delta: number) => void
  onFinish: () => void
}

export default function ControlPanel({ teams, pickerTeam, onAdjustScore, onFinish }: Props) {
  return (
    <div className="bg-blue-950 border-b-2 border-blue-800 px-4 py-2 flex items-center gap-4 flex-shrink-0">
      {/* Scores */}
      <div className="flex gap-3 flex-1 flex-wrap">
        {teams.map(team => (
          <div
            key={team.id}
            className={`flex items-center gap-2 px-3 py-1 rounded-lg ${
              team.id === pickerTeam.id ? 'bg-amber-400 text-blue-950' : 'bg-blue-800 text-white'
            }`}
          >
            <span className="font-bold" style={{ fontSize: 'clamp(0.8rem, 1.5vw, 1.1rem)' }}>
              {team.name}
            </span>
            <span className="font-black" style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.3rem)' }}>
              ${team.score}
            </span>
            {/* Manual adjust */}
            <div className="flex gap-1 ml-1">
              <button
                onClick={() => onAdjustScore(team.id, -100)}
                className="w-5 h-5 rounded text-xs bg-red-700 hover:bg-red-600 text-white font-bold flex items-center justify-center"
              >−</button>
              <button
                onClick={() => onAdjustScore(team.id, 100)}
                className="w-5 h-5 rounded text-xs bg-green-700 hover:bg-green-600 text-white font-bold flex items-center justify-center"
              >+</button>
            </div>
          </div>
        ))}
      </div>

      {/* Picker indicator */}
      <div className="text-blue-300 text-sm font-medium shrink-0">
        Picking: <span className="text-amber-400 font-bold">{pickerTeam.name}</span>
      </div>

      {/* End game */}
      <button
        onClick={onFinish}
        className="bg-blue-800 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded-lg font-semibold shrink-0"
      >
        End Game
      </button>
    </div>
  )
}
