import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStateProvider } from "./context/useGlobalState";
import BookPage from "./pages/book/BookPage";
import BooksPage from "./pages/home/BooksPage";
import Catalog from "./components/Catalog";

const App: React.FC = () => {
  return (
    <GlobalStateProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Routes>
            <Route path="/" element={<BooksPage />} />
            <Route path="/book/:id" element={<BookPage />} />
          </Routes>
        </div>
        <Catalog />
      </div>
    </GlobalStateProvider>
  );
};

export default App;
