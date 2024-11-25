import {
  generateFakeBook,
  generateFakeCategory,
  generateFakeQuiz,
} from "@/lib/utils";
import { faker } from "@faker-js/faker";

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
