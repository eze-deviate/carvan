import { faker } from "@faker-js/faker";
import { LibraryTabs } from "./enums";
import { ActivityOverview, TProfileMenu } from "@/types";
export const navItems = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "My Library",
    link: "/library",
  },
  {
    text: "Subscription",
    link: "/subscription",
  },
];

export const icons = {
  iconWithText: "logo-with-text",
};

export const ui = {
  layoutMargin: "mx-[6.375rem]",
  layoutPadding: "px-[6.375rem]",
};

// values are in rems
export const uiValues = {
  layoutMargin: "6.375rem",
};

export const categories = [
  { _id: faker.database.mongodbObjectId(), title: "Business" },
  { _id: faker.database.mongodbObjectId(), title: "Science" },
  { _id: faker.database.mongodbObjectId(), title: "Litrature & English" },
  { _id: faker.database.mongodbObjectId(), title: "Mathematics" },
  { _id: faker.database.mongodbObjectId(), title: "General Book" },
  { _id: faker.database.mongodbObjectId(), title: "Law" },
  { _id: faker.database.mongodbObjectId(), title: "Children" },
  { _id: faker.database.mongodbObjectId(), title: "Guide" },
  { _id: faker.database.mongodbObjectId(), title: "Things you like" },
];

export const libraryTabs = [
  { value: LibraryTabs.activity, text: "Activity Overview" },
  { value: LibraryTabs.books, text: "Books" },
  { value: LibraryTabs.quizzes, text: "Quizzes" },
  { value: LibraryTabs.wishlist, text: "Wishlist" },
];

export const activityOverview: { value: ActivityOverview; text: string }[] = [
  { value: "Today", text: "Today" },
  { value: "Last 7 days", text: "Last 7 days" },
  { value: "Last Month", text: "Last Month" },
  { value: "Last 3 Month", text: "Last 3 Month" },
  { value: "Last year", text: "Last Year" },
];

export const apiUrl = process.env.NEXT_PUBLIC_API;

export const profileMenu: TProfileMenu = [
  { label: "Account", icon: "account" },
  { label: "Security", icon: "security" },
  { label: "My Orders", icon: "orders" },
  { label: "Wishlist", icon: "wishlist" },
  { label: "Address Book", icon: "address" },
  { label: "Reviews", icon: "reviews" },
  { label: "Logout", icon: "logout" },
];
