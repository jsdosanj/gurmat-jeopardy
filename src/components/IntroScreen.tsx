type Props = { onStart: () => void }

export default function IntroScreen({ onStart }: Props) {
  return (
    <div className="w-screen h-screen bg-blue-950 flex flex-col items-center justify-center gap-10">
      <div className="text-center">
        <p className="text-amber-400 text-3xl font-semibold tracking-widest uppercase mb-4">
          Basics & Beyond · San Jose
        </p>
        <h1 className="text-white font-bold leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}>
          ਗੁਰਮਤਿ
        </h1>
        <h1 className="text-amber-400 font-bold leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}>
          Jeopardy
        </h1>
      </div>

      <p className="text-blue-300 text-2xl text-center max-w-xl px-4">
        5 categories · 25 questions · How well do you know Sikhi?
      </p>

      <button
        onClick={onStart}
        className="bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-blue-950 font-bold text-3xl px-16 py-6 rounded-2xl transition-colors shadow-2xl"
      >
        Let's Play →
      </button>
    </div>
  )
}
