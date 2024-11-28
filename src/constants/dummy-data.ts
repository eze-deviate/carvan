import {
  generateFakeBook,
  generateFakeCategory,
  generateFakeQuiz,
} from "@/lib/utils";
import { faker } from "@faker-js/faker";
import { QuestionType } from "./enums";

export const books = generateFakeBook(100);

export const quizzes = generateFakeQuiz();

export const categories = generateFakeCategory();

export const dummyDescription = faker.lorem.paragraphs({ min: 20, max: 100 });
export const dummyOptions = [
  { label: "a", option_text: "Paris", is_correct: true },
  { label: "b", option_text: "London", is_correct: false },
  { label: "c", option_text: "Berlin", is_correct: false },
  { label: "d", option_text: "Madrid", is_correct: false },
  { label: "e", option_text: "Rome", is_correct: false },
];

export const dummyQuestions = faker.helpers.multiple(
  () => {
    return {
      _id: faker.database.mongodbObjectId(),
      questionText: faker.lorem.sentences({ min: 1, max: 3 }),
      correctAnswer: faker.helpers.arrayElement(["A", "B", "C", "D"]),
      questionType: faker.helpers.enumValue(QuestionType),
      options: [
        {
          label: "A",
          optionText: faker.lorem.lines({ min: 1, max: 2 }),
          image: "/assets/images/question-image.png",
        },
        {
          label: "B",
          optionText: faker.lorem.lines({ min: 1, max: 2 }),
          image: "/assets/images/question-image.png",
        },
        {
          label: "C",
          optionText: faker.lorem.lines({ min: 1, max: 2 }),
          image: "/assets/images/question-image.png",
        },
        {
          label: "D",
          optionText: faker.lorem.lines({ min: 1, max: 2 }),
          image: "/assets/images/question-image.png",
        },
      ],
    };
  },
  { count: { min: 5, max: 10 } }
);
