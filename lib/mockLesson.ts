import { LessonData } from "@/types/lesson";

export const mockLesson: LessonData = {
  lesson_plan: {
    warmup:
      "Ask students how plants prepare food.",

    concepts: [
      "Photosynthesis definition",
      "Role of sunlight",
      "Chlorophyll importance",
    ],

    activities: [
      "Leaf observation activity",
      "Diagram labeling",
    ],

    recap:
      "Plants use sunlight to prepare food.",

    homework:
      "Draw and label photosynthesis process.",
  },

  worksheet: [
    "Define photosynthesis.",
    "Why is chlorophyll important?",
    "Fill in the blanks.",
  ],

  quiz: [
    {
      question:
        "What is required for photosynthesis?",
      answer: "Sunlight",
    },

    {
      question:
        "Which pigment helps plants?",
      answer: "Chlorophyll",
    },
  ],

  answers: [
    "Sunlight",
    "Chlorophyll",
  ],
};