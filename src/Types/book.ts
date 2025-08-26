// types.ts



export type Book = {
  book_name: string;
  id: string;
  chapters: Chapter[]
};

export type Chapter = {
  chapter_name: string;
  content: string | null;
  id: string; // Make sure this is included in your data
};

export type BookList = Book[];

