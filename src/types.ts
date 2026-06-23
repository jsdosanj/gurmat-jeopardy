export type Question = {
  id: string;
  category: string;
  points: number;
  clue: string;
  answer: string;
  used: boolean;
};

export type Team = {
  id: number;
  name: string;
  score: number;
};

export type GamePhase = 'intro' | 'teamSetup' | 'rules' | 'board' | 'question' | 'final';
