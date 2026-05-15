export interface LessonData {
  lesson_plan: {
    warmup: string;
    concepts: string[];
    activities: string[];
    recap: string;
    homework: string;
  };

  worksheet: string[];

  quiz: {
    question: string;
    answer: string;
  }[];

  answers: string[];
}