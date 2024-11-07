import {
  generateFakeBook,
  generateFakeCategory,
  generateFakeQuiz,
} from "@/lib/utils";

export const books = generateFakeBook(100);

export const quizzes = generateFakeQuiz();

export const categories = generateFakeCategory();
