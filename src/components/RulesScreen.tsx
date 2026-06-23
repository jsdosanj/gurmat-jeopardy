type Props = { onStart: () => void }

const RULES = [
  {
    icon: '🎯',
    title: 'Pick a Tile',
    body: 'Teams take turns picking a category and point value from the board. The host reads the clue aloud.',
  },
  {
    icon: '✋',
    title: 'Answer Up',
    body: 'The picking team answers first. If wrong, the question passes to the next team — and so on until someone gets it.',
  },
  {
    icon: '✓ / ✗',
    title: 'Host Decides',
    body: "The host marks Correct or Wrong using the buttons on screen. Only the host's call counts!",
  },
  {
    icon: '🎲',
    title: 'Double or Nothing',
    body: 'One hidden tile on the board is DOUBLE OR NOTHING. Get it right and your score doubles. Get it wrong and you lose everything.',
  },
  {
    icon: '⚖️',
    title: 'Tiebreaker',
    body: "If the game ends in a tie, a sudden-death Double or Nothing question breaks it. Wrong = lose your score. Correct = your score doubles.",
  },
  {
    icon: '🏆',
    title: 'Highest Score Wins',
    body: 'After all tiles are picked, the team with the most points wins. ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫਤਿਹ!',
  },
]

export default function RulesScreen({ onStart }: Props) {
  return (
    <div className="w-screen h-screen bg-blue-950 overflow-y-auto flex flex-col items-center justify-center gap-10 p-8">
      <div className="text-center">
        <p className="text-amber-400 font-bold text-2xl uppercase tracking-widest mb-2">
          San Jose · July 2026
        </p>
        <h2 className="text-white font-black" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          How to Play
        </h2>
      </div>

      <div
        className="grid gap-5 w-full"
        style={{ maxWidth: '56rem', gridTemplateColumns: 'repeat(2, 1fr)' }}
      >
        {RULES.map(r => (
          <div key={r.title} className="bg-blue-800 rounded-2xl p-6 flex gap-4 items-start">
            <span style={{ fontSize: '2rem', lineHeight: 1 }}>{r.icon}</span>
            <div>
              <p className="text-amber-400 font-bold text-xl mb-1">{r.title}</p>
              <p className="text-white text-lg leading-snug">{r.body}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onStart}
        className="bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-blue-950 font-black text-3xl px-16 py-6 rounded-2xl transition-colors shadow-2xl"
      >
        Start Game →
      </button>
    </div>
  )
}
