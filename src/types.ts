export interface Book {
  id: number;
  title: string;
  description: string;
  author: string;
  publicationDate: string; // You may consider using Date type
  genre: Genre;
  price: number;
}

export type Genre =
  | "Science Fiction"
  | "Satire"
  | "Drama"
  | "Action"
  | "Romance"
  | "Mystery"
  | "Horror";
