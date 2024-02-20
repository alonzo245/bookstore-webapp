import React from "react";
import { Book } from "../types";
import { Link } from "react-router-dom";

interface Props {
  book: Book;
  showMorInfo?: boolean;
}

const BookItem: React.FC<Props> = ({ book, showMorInfo = false }) => {
  const { author, description, genre, id, price, publicationDate, title } =
    book;

  return (
    <Link to={`/book/${id}`}>
      <div>
        <h2>{title}</h2>
        <p>
          <strong>Genre:</strong> {genre}
        </p>
        <p>
          <strong>Price:</strong> ${price}
        </p>
        {showMorInfo && (
          <>
            <p>
              <strong>Author:</strong> {author}
            </p>
            <p>
              <strong>Description:</strong> {description}
            </p>

            <p>
              <strong>Publication Date:</strong> {publicationDate}
            </p>
          </>
        )}
      </div>
    </Link>
  );
};

export default BookItem;
