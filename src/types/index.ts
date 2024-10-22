interface BookType {
  id: string;
  title: string;
  rating: number;
  author: string;
  price: number;
}

export type Review = {
  rating: number;
  review: string | undefined;
};
