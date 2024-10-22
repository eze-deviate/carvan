import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { faker } from "@faker-js/faker";
import { Review } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateFakeBook(n = 100) {
  let books = [];
  for (let i = 0; i < n; i++) {
    let item = {
      title: faker.word.words({ count: { min: 2, max: 3 } }),
      _id: faker.database.mongodbObjectId(),
      author: faker.person.firstName() + " " + faker.person.lastName(),
      price: faker.number.float({ multipleOf: 0.25, min: 0, max: 10 }),
      oldPrice: faker.number.float({ multipleOf: 0.25, min: 0, max: 10 }),
      // rating:faker.number.float({multipleOf:0.5, min:0, max:5}),
      reviews: faker.helpers.multiple(() => ({
        review: faker.helpers.maybe(() =>
          faker.lorem.sentences({ min: 2, max: 7 })
        ),
        rating: faker.number.float({ multipleOf: 0.5, min: 0, max: 5 }),
      })),
      // reviews:faker.number.int({multipleOf:1, min:0, max:1000}),
      // image:faker.image.url()
      image: "/assets/images/book-image.webp",
    };
    books.push(item);
  }

  return books;
}
export function generateFakeQuiz(n = 100) {}

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
