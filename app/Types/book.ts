// types.ts

export type ParentBook = {
  title: string;
  description: string;
};

export type Chapter = {
  title: string;
  content: string | null;
  parent_book: ParentBook;
  id: number; // Make sure this is included in your data
};

export type ApiResponse = {
  docs: Chapter[];
};
