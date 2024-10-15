import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { faker } from '@faker-js/faker';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateFakeBook(n=100){
  let books =[];
  for(let i=0; i<n; i++){
    let item = {
      title:faker.word.words({count:{min:2, max:3}}),
      id:faker.database.mongodbObjectId(),
      author: faker.person.firstName() + faker.person.lastName(),
      price: faker.number.float({ multipleOf: 0.25, min: 0, max:10 }),
    }
    books.push(item)
  }

  return books;
}
export function generateFakeQuiz(n=100){

}