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
