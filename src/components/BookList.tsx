import React from "react";
import { useGlobalState } from "../context/useGlobalState";
import BookItem from "./BookItem";

const BookList: React.FC = () => {
  const { books, booksMap, catalog, setGlobalState } = useGlobalState();

  const handleBookSelect = (bookId: number) => {
    setGlobalState({
      catalog: { [`book-${bookId}`]: booksMap[`book-${bookId}`], ...catalog },
    });
  };

  const handleBookRemove = (bookId: number) => {
    const newCatalog: any = JSON.parse(JSON.stringify(catalog));
    delete newCatalog[`book-${bookId}`];
    setGlobalState({
      catalog: newCatalog,
    });
  };

  return books?.length === 0 ? (
    <></>
  ) : (
    <div>
      <h2>Book List</h2>
      {books.map((book, key) => (
        <div key={key}>
          <BookItem key={book.id} book={book} />
          <button onClick={() => handleBookSelect(book.id)}>Select</button>
          <button onClick={() => handleBookRemove(book.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
