import { z } from "zod";

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

export const CheckoutAddressFormSchema = z.object({
  firstName: z.string().email("Required"),
  lastName: z.string().min(1, "Required"),
  alternativePhoneNumber: z.string(),
  phoneNumber: z.string(),
  state: z.string(),
  district: z.string(),
  city: z.string(),
  deliveryAddress: z.string(),
  additionalInfo: z.string(),
});

export type ActivityOverview =
  | "Today"
  | "Last 7 days"
  | "Last Month"
  | "Last 3 Month"
  | "Last year";

// export const CheckoutAddressModalSchema = z.object({
//   ...CheckoutAddressFormSchema,
//   default: z.boolean()
// })
