import axios from "axios";
import { Book } from "../types";

const API_URL = "http://localhost:3001/books"; // Replace with your actual API endpoint

const fetchBooks = async (): Promise<Book[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

export default fetchBooks;
