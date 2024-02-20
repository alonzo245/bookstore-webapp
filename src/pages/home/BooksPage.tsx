import React, { useEffect } from "react";
import BookList from "../../components/BookList";
import fetchBooks from "../../services/bookService";
import { useGlobalState } from "../../context/useGlobalState";
import { Book } from "../../types";

const BooksPage: React.FC = () => {
  const { setGlobalState } = useGlobalState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      if (data?.length) {
        const booksMap: Record<string, Book> = {};

        data.forEach((book) => (booksMap[`book-${book.id}`] = book));
        setGlobalState({ books: data, booksMap: booksMap });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Bookstore</h1>
      <BookList />
    </div>
  );
};

export default BooksPage;
