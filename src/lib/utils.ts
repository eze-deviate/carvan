import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { faker } from "@faker-js/faker";
import { BookType, Review, TQuiz, TStorageItems } from "@/types";
import { decryptData, encryptData } from "./crypto";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateFakeBook(n = 100): BookType[] {
  let books = [];
  for (let i = 0; i < n; i++) {
    let item = {
      title: faker.word.words({ count: { min: 2, max: 3 } }),
      _id: faker.database.mongodbObjectId(),
      author: faker.person.firstName() + " " + faker.person.lastName(),
      price: faker.number.float({ multipleOf: 0.25, min: 0, max: 10 }),
      oldPrice: faker.number.float({ multipleOf: 0.25, min: 0, max: 10 }),
      description: faker.lorem.paragraphs({ min: 7, max: 100 }),
      // rating:faker.number.float({multipleOf:0.5, min:0, max:5}),
      reviews: faker.helpers.multiple(
        () => ({
          review: faker.helpers.maybe(
            () => faker.lorem.sentences({ min: 2, max: 7 }),
            { probability: 0.8 }
          ),
          rating: faker.number.int({ multipleOf: 1, min: 0, max: 5 }),
          createdAt: faker.date.past({ years: 10 }),
          user: {
            _id: faker.database.mongodbObjectId(),
            name: faker.person.firstName() + " " + faker.person.lastName(),
            avatar: faker.image.avatar(),
          },
        }),
        { count: { min: 7, max: 30 } }
      ),
      // reviews:faker.number.int({multipleOf:1, min:0, max:1000}),
      // image:faker.image.url()
      image: "/assets/images/book-image.webp",
    };
    books.push(item);
  }

  return books;
}
export function generateFakeQuiz(n = 100): TQuiz[] {
  let quiz = [];
  for (let i = 0; i < n; i++) {
    let item = {
      title: faker.word.words({ count: { min: 2, max: 3 } }),
      _id: faker.database.mongodbObjectId(),
      sourced:
        faker.lorem.words({ min: 2, max: 4 }) +
        " By " +
        faker.person.fullName(),
      genre: {
        _id: faker.database.mongodbObjectId(),
        name: faker.word.noun(),
      },
      // author: faker.person.firstName() + " " + faker.person.lastName(),
      price: faker.number.float({ multipleOf: 0.25, min: 0, max: 10 }),
      oldPrice: faker.number.float({ multipleOf: 0.25, min: 0, max: 10 }),
      // rating:faker.number.float({multipleOf:0.5, min:0, max:5}),
      reviews: faker.helpers.multiple(
        () => ({
          review: faker.helpers.maybe(() =>
            faker.lorem.sentences({ min: 2, max: 7 })
          ),
          rating: faker.number.int({ multipleOf: 1, min: 0, max: 5 }),
          createdAt: faker.date.past({ years: 10 }),

          user: {
            _id: faker.database.mongodbObjectId(),
            name: faker.person.firstName() + " " + faker.person.lastName(),
            avatar: faker.image.avatar(),
          },
        }),
        { count: { min: 7, max: 30 } }
      ),
      // questions: faker.helpers.multiple(() => ({
      //   _id: faker.database.mongodbObjectId(),
      // })),
      cover: "/assets/images/book-image.webp",
    };
    quiz.push(item);
  }

  return quiz;
}

export function generateFakeCategory(n = 10) {
  let categories = [];
  for (let i = 0; i < n; i++) {
    let item = {
      _id: faker.database.mongodbObjectId(),
      text: faker.lorem.words({ min: 1, max: 3 }),
      selected: false,
    };
    categories.push(item);
  }
  return categories;
}

export function getAverageRating(review: Review[]) {
  const totalRating = review.reduce((acc, item) => acc + item.rating, 0);
  return totalRating / review.length;
}

export function getNumberOfReviews(review: Review[]) {
  let sum = 0;
  for (let i = 0; i < review.length; i++) {
    if (review[i].review) {
      sum += 1;
    }
  }
  return sum;
}

export const getEncryptedStorageData = (key: TStorageItems) => {
  return decryptData(localStorage.getItem(key));
};

export const setEncryptedStorageData = (key: TStorageItems, value: any) => {
  localStorage.setItem(key, encryptData(value));
};

export const getStorageData = (key: TStorageItems) => {
  return localStorage.getItem(key);
};

export const setStorageData = (key: TStorageItems, value: any = null) => {
  localStorage.setItem(key, value);
};
