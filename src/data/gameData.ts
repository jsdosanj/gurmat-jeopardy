import type { Question } from '../types'

export const CATEGORIES = [
  'ਵਾਹਿਗੁਰੂ & Bani',
  'The Gurus',
  'Sikh Practice',
  'Sikh Character',
  'Living Sikhi',
]

const raw: Omit<Question, 'id' | 'used'>[] = [
  // ─── ਵਾਹਿਗੁਰੂ & Bani ───────────────────────────────────────────
  {
    category: 'ਵਾਹਿਗੁਰੂ & Bani',
    points: 100,
    clue: 'This two-symbol combination that opens Sri Guru Granth Sahib Ji means "There is One God."',
    answer: 'ੴ (Ik Onkar)',
  },
  {
    category: 'ਵਾਹਿਗੁਰੂ & Bani',
    points: 200,
    clue: 'This is the Sikh name for God — meaning "Wonderful Lord." We say it during Simran.',
    answer: 'ਵਾਹਿਗੁਰੂ (Waheguru)',
  },
  {
    category: 'ਵਾਹਿਗੁਰੂ & Bani',
    points: 300,
    clue: 'Guru Nanak Dev Ji wrote this prayer. It is the first Bani in Sri Guru Granth Sahib Ji and has 38 Pauris.',
    answer: 'Japji Sahib',
  },
  {
    category: 'ਵਾਹਿਗੁਰੂ & Bani',
    points: 400,
    clue: 'This is our daily prayer routine — the Banis Sikhs read every morning and evening to stay connected to the Guru.',
    answer: 'ਨਿਤਨੇਮ (Nitnem)',
  },
  {
    category: 'ਵਾਹਿਗੁਰੂ & Bani',
    points: 500,
    clue: 'This Punjabi word means "divine nectar that gives life." It comes from the Sanskrit root meaning "not death."',
    answer: 'ਅੰਮ੍ਰਿਤ (Amrit) — the divine nectar of life',
  },

  // ─── The Gurus ────────────────────────────────────────────────────
  {
    category: 'The Gurus',
    points: 100,
    clue: 'Born in 1469 in Nankana Sahib, this was the very first Sikh Guru who traveled the world sharing Waheguru\'s message.',
    answer: 'Guru Nanak Dev Ji',
  },
  {
    category: 'The Gurus',
    points: 200,
    clue: 'This is how many Sikh Gurus came in human form before Guruship was passed to Sri Guru Granth Sahib Ji.',
    answer: '10 (Ten)',
  },
  {
    category: 'The Gurus',
    points: 300,
    clue: 'It is not a person — it is a book. Installed as our eternal, living Guru in 1708, it is present in every Gurdwara.',
    answer: 'Sri Guru Granth Sahib Ji',
  },
  {
    category: 'The Gurus',
    points: 400,
    clue: 'The 10th Guru, born in Patna Sahib, who called the Sangat to Anandpur Sahib on Vaisakhi 1699 and created the Khalsa.',
    answer: 'Guru Gobind Singh Ji',
  },
  {
    category: 'The Gurus',
    points: 500,
    clue: 'At Vaisakhi 1699, the Guru asked for five heads. Five Sikhs volunteered. What were these five Sikhs called, and what was born that day?',
    answer: 'The Panj Pyare — and the Khalsa Panth was born through the first Amrit Sanchar',
  },

  // ─── Sikh Practice ────────────────────────────────────────────────
  {
    category: 'Sikh Practice',
    points: 100,
    clue: 'Everyone eats together for free — no matter who you are. This is one of Sikhi\'s most powerful traditions served at every Gurdwara.',
    answer: 'Langar',
  },
  {
    category: 'Sikh Practice',
    points: 200,
    clue: 'Helping with Langar, cleaning shoes at the Gurdwara, or helping someone without being asked — all examples of this.',
    answer: 'ਸੇਵਾ (Seva) — selfless service',
  },
  {
    category: 'Sikh Practice',
    points: 300,
    clue: 'Five Sikhs (Panj Pyare) mix Amrit in an iron bowl and give it to new initiates. This ceremony is how someone joins the Khalsa.',
    answer: 'Amrit Sanchar (or Khande di Pahul)',
  },
  {
    category: 'Sikh Practice',
    points: 400,
    clue: 'Name THREE of the five items a Khalsa Sikh always wears — they include uncut hair, a steel bracelet, and a small sword.',
    answer: 'Any 3 of: Kesh (hair), Kara (bracelet), Kachera (undergarment), Kangha (comb), Kirpan (sword)',
  },
  {
    category: 'Sikh Practice',
    points: 500,
    clue: 'What is ਅੰਮ੍ਰਿਤ ਵੇਲਾ, and roughly when does it happen? The Guru says this is the most powerful time for connecting with Waheguru.',
    answer: 'The early morning hours before sunrise (approx. 3–6am) — the ambrosial hours for Simran and Nitnem',
  },

  // ─── Sikh Character ───────────────────────────────────────────────
  {
    category: 'Sikh Character',
    points: 100,
    clue: 'Even when things are hard, a Sikh keeps this — it means your spirit keeps rising and you stay positive no matter what.',
    answer: 'ਚੜ੍ਹਦੀ ਕਲਾ (Chardikala) — ever-rising spirit / eternal optimism',
  },
  {
    category: 'Sikh Character',
    points: 200,
    clue: 'The Guru teaches us to have this instead of pride and ego. It means being humble, gentle, and grounded.',
    answer: 'ਨਿਮਰਤਾ (Nimrata) — humility',
  },
  {
    category: 'Sikh Character',
    points: 300,
    clue: 'Name TWO of the five vices (ਪੰਜ ਵਿਕਾਰ) that Gurmat teaches us to work on. One is anger, one is greed...',
    answer: 'Any 2 of: Kaam (lust), Krodh (anger), Lobh (greed), Moh (attachment), Ahankar (ego)',
  },
  {
    category: 'Sikh Character',
    points: 400,
    clue: 'This means "contentment" — being at peace with what Waheguru has given you, without always wanting more.',
    answer: 'ਸੰਤੋਖ (Santokh) — contentment',
  },
  {
    category: 'Sikh Character',
    points: 500,
    clue: 'Gurbani calls this the disease of believing "I am great on my own." It creates a wall between us and Waheguru. What is it?',
    answer: 'ਹਉਮੈ (Haumai) — ego / the false sense of being separate from Waheguru',
  },

  // ─── Living Sikhi ────────────────────────────────────────────────
  {
    category: 'Living Sikhi',
    points: 100,
    clue: 'We do this when we enter the Darbar Sahib — placing our head to the ground before Sri Guru Granth Sahib Ji.',
    answer: 'ਮੱਥਾ ਟੇਕਣਾ (Matha Tekna) — bowing before the Guru',
  },
  {
    category: 'Living Sikhi',
    points: 200,
    clue: 'The Guru says you can\'t fully grow spiritually alone. This holy community of Sikhs helps you stay connected and inspired.',
    answer: 'ਸੰਗਤਿ (Sangat) — the holy congregation',
  },
  {
    category: 'Living Sikhi',
    points: 300,
    clue: 'We stand, fold our hands, and speak directly to Waheguru. We do it before meals, events, and anytime we need the Guru.',
    answer: 'ਅਰਦਾਸ (Ardas) — our prayer and conversation with Waheguru',
  },
  {
    category: 'Living Sikhi',
    points: 400,
    clue: 'This week at camp we learned about ਦਇਆ (compassion) and ਖਿਮਾ (forgiveness). Name ONE way you can show these to a friend who is going through something hard.',
    answer: 'Open answer: listening without judging, forgiving a mistake, being kind, checking in on them, praying for them, etc.',
  },
  {
    category: 'Living Sikhi',
    points: 500,
    clue: 'The Guru\'s ultimate gift — not just rules, but a living RELATIONSHIP and UNION with Waheguru. What is the Punjabi word for this union?',
    answer: 'ਮਿਲਾਪ (Milaap) — union with Waheguru; the greatest goal of Sikh life',
  },
]

export const initialQuestions: Question[] = raw.map(q => ({
  ...q,
  id: `${q.category}-${q.points}`,
  used: false,
}))

export const tiebreakerQuestions: Question[] = [
  {
    id: 'tb1',
    category: 'Tiebreaker',
    points: 0,
    clue: 'This sacred symbol — the very first character in ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ — represents the One Creator.',
    answer: 'ੴ (Ik Onkar)',
    used: false,
  },
  {
    id: 'tb2',
    category: 'Tiebreaker',
    points: 0,
    clue: 'Guru Gobind Singh Ji established the Khalsa on Vaisakhi of this year at Anandpur Sahib.',
    answer: '1699',
    used: false,
  },
  {
    id: 'tb3',
    category: 'Tiebreaker',
    points: 0,
    clue: 'The five articles of faith worn by initiated Sikhs all begin with the letter "K" in Punjabi. What are they collectively called?',
    answer: 'ਪੰਜ ਕਕਾਰ (Panj Kakars / The Five Ks)',
    used: false,
  },
  {
    id: 'tb4',
    category: 'Tiebreaker',
    points: 0,
    clue: 'Guru Nanak Dev Ji composed this prayer at Ang 8 of ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ describing 38 qualities of truly listening to the Lord\'s Name.',
    answer: 'ਸੁਣਿਐ (Suniai)',
    used: false,
  },
]
