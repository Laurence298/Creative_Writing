// types.ts



export type Book = {
  title: string;
  description: string;
  chapters: Chapter[]
};

export type Chapter = {
  title: string;
  content: string | null;
  id: number; // Make sure this is included in your data
};

export type BookList = {
  books: Book[];
};
