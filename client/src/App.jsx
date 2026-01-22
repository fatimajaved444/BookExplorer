import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import BookDetail from "./pages/BookDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/book/:id" element={<BookDetail />} />
    </Routes>
  );
}
