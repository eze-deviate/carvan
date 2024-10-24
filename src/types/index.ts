export interface BookType {
  title: string;
  _id: string;
  author: string;
  price: number;
  oldPrice: number;
  description: string;
  reviews: Review[];
  image: string;
}
[];

export type Review = {
  rating: number;
  review: string | undefined;
  createdAt: Date;
  user: {
    _id: string;
    avatar?: string;
    name: string;
  };
};
