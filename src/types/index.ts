import { AxiosRequestConfig, Method } from "axios";
import { z } from "zod";

interface TBook {}
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

export const UpdatePersonalInfoFormSchema = z.object({
  firstName: z.string().email("Required"),
  lastName: z.string().min(1, "Required"),
  phoneNumber: z.string(),
  // DateOfBirth:z.string()
});

export const UpDateDeliveryAddressFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.string(),
  alternativePhoneNumber: z.string(),
  province: z.string(),
  district: z.string(),
  city: z.string(),
  deliveryAddress: z.string(),
  additionalInfo: z.string().optional(),
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

export type TCart = {};

export type TQuiz = {
  _id: string;
  title: string;
  cover: string;
  sourced: string;
  genre: {
    _id: string;
    name: string;
  };
  oldPrice: any;
  price: any;
  reviews: Review[];
  // questions: any[];
  // module: any[];
};

export type TStorageItems = "user" | "cart" | "wishlist";

export type TApiServiceConfig = {
  url: string;
  method?: Method;
  data?: any;
  // headers?: RawAxiosRequestHeaders | AxiosHeaders | Partial<HeadersDefaults>;
  headers?: AxiosRequestConfig["headers"];
  otherConfig?: AxiosRequestConfig;
};
export type TApiService = (config: TApiServiceConfig) => Promise<any>;

export type TprofileMenuIcon =
  | "account"
  | "security"
  | "orders"
  | "wishlist"
  | "address"
  | "reviews"
  | "logout";
export interface TProfileMenuItem {
  label: string;
  icon: TprofileMenuIcon;
}
export type TProfileMenu = TProfileMenuItem[];

export type TQuizMode = "study" | "exam";
export type TQuizStage =
  | "pre"
  | "inprogress"
  | "review"
  | "completed"
  | "correction"
  | "performance-info";

export const ReportQuestionSchema = z.object({
  // questionIssue: z.boolean().default(false).optional(),
  // incorrectAnswer: z.boolean().default(false).optional(),
  // spellingOrGrammar: z.boolean().default(false).optional(),
  // imageIssue: z.boolean().default(false).optional(),
  // others: z.boolean().default(false).optional(),
  checkboxes: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  description: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .default("")
    .optional(),
});

export const LeaveAReviewSchema = z.object({
  description: z.string().optional(),
});

export type TQuestion = {
  readonly _id: string;
  readonly questionText: string;
  readonly correctAnswer: "A" | "B" | "C" | "D";
  // readonly questionType: typeof QuestionType;
  readonly questionType: string;
  readonly options: readonly TOption[];
};

export type TOption = {
  readonly label: "A" | "B" | "C" | "D";
  readonly optionText: string;
  readonly image: string;
};

export type TUnAnsweredQuestion = {
  question: TQuestion;
  index: number;
};

export type TUserAnswer = {
  question: TQuestion;
  selectedOption: TOption; // Replace 'any' with the actual type of selectedOption
  index: number;
};

export type TCartItem = {
  item: BookType | TQuiz;
  qty: number;
};

export type TWishlistTab = "books" | "quizzes";
