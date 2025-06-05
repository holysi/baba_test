export interface Character {
  id: string;
  name: string;
  avatar: string;
  description: string;
  questionSetId: string;
}

export interface Option {
  id: string;
  text: string;
  points: number;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  image?: string;
  description?: string;
}

export interface QuestionSet {
  id: string;
  questions: Question[];
}

export interface GameState {
  selectedCharacter: Character | null;
  currentQuestionIndex: number;
  score: number;
  isGameOver: boolean;
  questionSetId: string | null;
}