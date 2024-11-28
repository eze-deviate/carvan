import { create } from "zustand";

type State = {
  book: {
    image: string;
    fileType: string;
    url: string;
  };
};
type Action = {
  setBook: (book: any) => void;
};

export const useBookReaderStore = create<Action & State>((set) => ({
  book: {
    image: "/assets/images/book-image.webp",
    fileType: ".pdf",
    url: "/assets/pdf/python-basics-sample-chapters.pdf",
  },
  setBook: (book: any) => set((state) => ({ book })),
  //   increment: () => set((state) => ({ book: state.book + 1 })),
}));
