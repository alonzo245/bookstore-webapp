import React from "react";
import { Link, useParams } from "react-router-dom";
import BookItem from "../../components/BookItem";
import { useGlobalState } from "../../context/useGlobalState";

const BookPage: React.FC = () => {
  const { id } = useParams();
  const { booksMap } = useGlobalState();

  const book = booksMap?.[`book-${id}`] || false;

  return !book ? (
    <></>
  ) : (
    <div>
      <Link to={"/"}>
        <div>Back to books list</div>
      </Link>
      <h1>Book</h1>
      <BookItem book={book} showMorInfo={true} />
    </div>
  );
};

export default BookPage;
