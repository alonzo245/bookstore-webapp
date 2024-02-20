import React from "react";
import { useGlobalState } from "../context/useGlobalState";
import BookItem from "./BookItem";

const Catalog: React.FC = () => {
  const { catalog, setGlobalState } = useGlobalState();

  const handleRemoveFromCatalog = (bookId: number) => {
    const newCatalog: any = JSON.parse(JSON.stringify(catalog));
    delete newCatalog[`book-${bookId}`];
    console.log("ss", newCatalog);
    setGlobalState({
      catalog: newCatalog,
    });
  };

  return (
    <div style={{ border: "1px solid #999" }}>
      <h3>My Catalog</h3>
      {Object.values(catalog).map((book, key) => (
        <div key={key}>
          <BookItem key={book.id} book={book} />
          <button onClick={() => handleRemoveFromCatalog(book.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
